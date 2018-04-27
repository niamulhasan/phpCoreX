<?php
require_once 'corex/autoload.php';

$user = new User();
$user->logout();

Redirect::to('index.php');