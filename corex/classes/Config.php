<?php

/**
* 
*/
class Config {
	
	public static function get($path = null) {
		if ($path) {
			$config = $GLOBALS['config'];
			$path = explode('/', $path);

			foreach ($path as $value) {
				// check if the value is exist or defined in the ini.php file

				if(isset($config[$value])) {
					$config = $config[$value];
				}
			}
			return $config;
		} 
		return false;
		
	}
}