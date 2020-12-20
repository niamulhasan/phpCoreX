<?php

/**
* 
*/
class DD {
	private static $_instance = null,
				   $_view;


	public static function createView($view){
		// To Prevent multiple connection on same page
		self::$_instance = new DD();
		self::$_view = $view;
		return self::$_instance;
	}



	public function params($sql, $params = array()) {
		$this->_results = 'results';
		return $this;
	}

}