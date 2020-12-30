<?php

session_start();

$GLOBALS['config'] = array(
    'mysql' => array(
        'host'      => 'localhost',
        'username'  => 'root',
        'password'  => '',
        'database'  => 'developing_corex_admin',
        'charset'   => 'utf8',
    ),
    'app_variables' => array(
        'app_title' => "phpCoreX",
        'root_url'   => 'phpCoreXadmin',
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

spl_autoload_register(function ($class) {
    if (file_exists('corex/Classes/' . $class . '.php')) {
        require_once 'corex/Classes/' . $class . '.php';
    } elseif (file_exists('corex/Controllers/' . $class . '.php')) {
        require_once 'corex/Controllers/' . $class . '.php';
    }
    //Research: Check may be the condition above in the else if fliping in if could decrease time complexity
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

require_once 'routes/web_routes.php';
