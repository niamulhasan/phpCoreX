<?php

/**
 * 
 */
class DB
{
	private static $_instance = null;
	private $_pdo,
		$_query,
		$_error = false,
		$_results,
		$_count = 0;

	private function __construct()
	{
		try {
			/* The syntex here basically looks like this 
			    *  $this->_pdo = new PDO('mysql:host=localhost;dbname=quran;charset=utf8','root','');
			*/
			$this->_pdo = new PDO('mysql:host=' . Config::get('mysql/host') . ';dbname=' . Config::get('mysql/database') . ';charset=' . Config::get('mysql/charset'), Config::get('mysql/username'), Config::get('mysql/password'));

			// Uncomment to be confirmed about Database Connection
			// echo "database connected!";

		} catch (PDOException $e) {
			die($e->getMessage());
		}
	}



	public static function operation()
	{
		// To Prevent multiple connection on same page
		if (!isset(self::$_instance)) {
			self::$_instance = new DB();
		}
		return self::$_instance;
	}







	private function getDataType($variable)
	{
		$variableType = gettype($variable);
		switch ($variableType) {
			case 'integer':
				return PDO::PARAM_INT;
				break;
			case 'string':
				return PDO::PARAM_STR;
				break;
			case 'double':
				return PDO::PARAM_STR;
				break;
			case 'boolean':
				return PDO::PARAM_BOOL;
				break;
			case 'NULL':
				return PDO::PARAM_NULL;
				break;
		}
	}







	public function query($sql, $params = array())
	{
		$this->_error = false;

		if ($this->_query = $this->_pdo->prepare($sql)) {
			//to determine possition, check if it should be 0
			$x = 1;
			if (count($params)) {
				foreach ($params as $param) {
					/* This code is like this 
					   $this->_query->bindValue(possition, $parameter);
					   So  we used $x to show the index array possition and increase it
				    */
					/* Determining datatype from above function*/
					$paramDataType = $this->getDataType($param);

					$this->_query->bindValue($x, $param, $paramDataType);
					$x++;
				}
			}

			if ($this->_query->execute()) {
				$this->_results = $this->_query->fetchAll(PDO::FETCH_OBJ);
				$this->_count = $this->_query->rowCount();
			} else {
				$this->_error = true;
			}
		}

		return $this;
	}







	public function action($action, $table, $where = array())
	{
		if (count($where) === 3) {
			$operators = array('=', '>', '<', '>=', '<=');

			$field     = $where[0];
			$operator  = $where[1];
			$value     = $where[2];

			if (in_array($operator, $operators)) {
				$sql = "{$action} FROM {$table} WHERE {$field} {$operator} ?";

				if (!$this->query($sql, array($value))->error()) {
					return $this;
				}
			}
		}
		return false;
	}


	public function get($table, $where)
	{
		return $this->action('SELECT *', $table, $where);
	}


	public function delete($table, $where)
	{
		return $this->action('DELETE', $table, $where);
	}


	public function insert($table, $fields = array())
	{
		if (count($fields)) {
			$keys = array_keys($fields);
			$values = '';
			$x = 1;

			foreach ($fields as $field) {
				$values .= '?';

				if ($x < count($fields)) {
					$values .= ', ';
				}
				$x++;
			}


			$sql = "INSERT INTO {$table} (`" . implode('`, `', $keys) . "`) VALUES({$values})";

			if (!$this->query($sql, $fields)->error()) {
				return true;
			}
		}
		return false;
	}

	public function update($primary_key, $table, $fields)
	{
		$set = '';
		$x = 1;

		foreach ($fields as $name => $value) {
			$set .= "{$name} = ?";
			if ($x < count($fields)) {
				$set .= ', ';
			}
			$x++;
		}

		$sql = "UPDATE {$table} SET {$set} WHERE id = {$primary_key}";

		if (!$this->query($sql, $fields)->error()) {
			return true;
		}
		return false;
	}


	public function results()
	{
		return $this->_results;
	}


	public function firstResult()
	{
		return $this->results()[0];
	}


	public function error()
	{
		return $this->_error;
	}


	public function count()
	{
		return $this->_count;
	}
}
