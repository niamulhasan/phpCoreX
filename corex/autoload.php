<?php

session_start();

$GLOBALS['config'] = array(
    'mysql' => array(
    	'host'      => 'localhost',
    	'username'  => 'db_username',
    	'password'  => 'db_user_password',
    	'database'  => 'database_name',
        'charset'   => 'utf8'
    	),
    'remember' => array(
    	'cookie_name'   => 'hash',
    	'cookie_expiry' => 604800
    	),
    'session' => array(
    	'session_name' => 'user',
        'token_name'   => 'token'
    	)
);


// auto load classes files using the class name via apl_autoload_resister

spl_autoload_register(function($class) {
	require_once 'corex/classes/'.$class.'.php'; 
});


//Remember me feature code
if (Cookie::exists(Config::get('remember/cookie_name')) && !Session::exists(Config::get('session/session_name'))) {
    $hash = Cookie::get(Config::get('remember/cookie_name'));
    $hashCheck = DB::operation()->get('users_session', array('hash', '=', $hash));

    if ($hashCheck->count()) {
        $user = new User($hashCheck->firstResult()->user_id);
        $user->login();
    }
}