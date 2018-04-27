<?php

/**
* Form Validation 
*/
class Validate {
	private $_passed = false,
			$_errors = array(),
			$_db = null;
	
	public function __construct()
	{
		$this->_db = DB::operation();
	}

	public function check($form_data, $filters = array()) {
		foreach ($filters as $filter => $conditions) {
			foreach ($conditions as $condition => $single_condition) {
				
				$value = trim($form_data[$filter]);
				// $filter should be escape like this but some reason this build in function is not working
				// $filter = escape($filter);


				if ($condition === 'required' && empty($value)) {
					$this->addError("{$filter} is required!");
				} else if(!empty($value)) {
					switch ($condition) {
						case 'min':
								if (strlen($value) < $single_condition) {
									$this->addError("{$filter} must be a length of minimum {$single_condition} charecters!");
								}
							break;

						case 'max':
								if (strlen($value) > $single_condition) {
									$this->addError("{$filter} must be a length of maximum {$single_condition} charecters!");
								}
							break;

						case 'matches':
								if ($value != $form_data[$single_condition]) {
									$this->addError("{$single_condition} must match {$filter}");
								}
							break;

						case 'unique':
								$check = $this->_db->get($single_condition, array($filter,  '=', $value));
								if ($check->count()) {
									$this->addError("{$filter} already  exists!");
								}
							break;
						
						default:
							# code...
							break;
					}
				}

			}
		}

		if (empty($this->_errors)) {
			$this->_passed = true;
		}
		return $this;
	}

	private function addError($error) {
		$this->_errors[] = $error;
	}

	public function errors(){
		return $this->_errors;
	}

	public function passed() {
		return $this->_passed;
	}
}



