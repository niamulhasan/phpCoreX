<?php

class Controller {

	public static $params = null;

    public static function createView($viewName, $params = array()){
		self::$params = $params;
        require_once("corex/Views/$viewName.php");
    }
}

// class Controller {
// 	private static $_instance = null,
// 				   $_viewName,
// 				   $_params = array();


// 	public static function createView($viewName){
// 		// To Prevent multiple connection on same page
// 		self::$_instance = new Controller();
// 		self::$_viewName = $viewName;
// 		//require_once("corex/Views/$viewName.php");
// 		return self::$_instance;
// 	}



// 	public function params($params = array()) {
// 		self::$_params = $params;
// 		//print_r(self::$_params);
// 		$viewName = self::$_viewName;
// 		require_once("corex/Views/$viewName.php");
// 		return $this;
// 	}

//}