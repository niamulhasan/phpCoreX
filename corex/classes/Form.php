<?php

/**
* Input class
*/
class Form {
	
	public static function exists($type = 'post') {
		switch ($type) {
			case 'post':
				return (!empty($_POST)) ? true : false;
				break;

			case 'get':
				return (!empty($_GET)) ? true : false;
				break;
			
			default:
				return false;
				break;
		}
	}

	public static function data($data) {
		if (isset($_POST[$data])) {
			return $_POST[$data];
		} elseif (isset($_GET[$data])) {
			return $_GET[$data];
		}
		return '';
	}
}