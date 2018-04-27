<?php

/**
* Hash class to generate strong password
*/
class Hash {
	
	public static function generate($string, $salt = '') {
		return hash('sha256', $string.$salt);
	}

	public static function randomString($length = 10) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	public static function salt($length) {
		return self::randomString($length);
	}

	public static function unique() {
		return self::generate(uniqid());
	}
}