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

    public static function get($route, $function)
    {
        self::$routeList[] = $route;

        $path = $_SERVER['REQUEST_URI'];
        $path = substr($path, strlen(Config::get('app_variables/root_url')) + 2);
        //echo "url::" . $path . "<br>";
        //echo "route::" . $route . "<br>";
        //echo "url array::";
        //print_r(explode("/", $path));
        //echo "<br/>";
        //echo "route array::";
        //print_r(explode("/", $route));
        //echo "<br/><br/>";
        $path_array = explode("/", $path);
        $route_array = explode("/", $route);

        $ifFullMatch = false;
        $params = array();

        if (count($path_array) == count($route_array)) {
            foreach ($route_array as $index => $route_part) {
                if (!(Functions::startsWith($route_part, "$"))) {
                    if ($route_part == $path_array[$index]) {
                        //echo "<br/>" . $route_part . " - " . $path_array[$index] . "</br>";
                        $ifFullMatch = true;
                    } else {
                        $ifFullMatch = false;
                        break;
                    }
                } else {
                    $params[ltrim($route_part, "$")] = $path_array[$index];
                }
            }
        }

        //print_r($params);
        //echo "<br/>";

        if ($ifFullMatch) {
            $function->__invoke($params);
        }
        // if ($path == $route) {
        //     $function->__invoke(array("one", "two"));
        // }
    }
}
