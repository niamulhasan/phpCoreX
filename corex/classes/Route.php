<?php

class Route
{
    public static $routeList = array();

    public static function set($route, $function)
    {
        self::$routeList[] = $route;

        //print_r(self::$routeList);

        // if ($_GET['url'] == $route) {
        //     $function->__invoke();
        // }

        $path = $_SERVER['REQUEST_URI'];

        $path = substr($path, strlen(Config::get('app_variables/root_url')) + 2);
        if ($path == $route) {
            $function->__invoke();
        }
    }
}
