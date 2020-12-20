<?php

class Route {
    public static $routeList = array();

    public static function set($route, $function){
        self::$routeList[] = $route;

        //print_r(self::$routeList);
        if($_GET['url'] == $route){
            $function->__invoke();
        }
    }
}