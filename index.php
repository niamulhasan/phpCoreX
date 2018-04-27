<?php
require_once 'corex/autoload.php';


// Flashing message of a session. this case "home" yyy
if (Session::exists('home')) {
	echo Session::flash('home');
}



/* Checking if an user is logged in
$user = new User();
if ($user->isLoggedIn()) {
	echo "Logged In!";
}*/


$user = new User();
if ($user->isLoggedIn()) {
?>

	<p>Hello <a href="profile.php?user=<?php echo $user->data()->username; ?>"><?php echo $user->data()->username; ?></a></p>

	<ul>
		<li><a href="update.php">Update info</a></li>
		<li><a href="changepassword.php">Change Password</a></li>
		<li><a href="logout.php">Logout</a></li>
	</ul>

<?php

	if ($user->hasPermission('admin')) {
		echo "You are an admin\n";
	}
	if ($user->hasPermission('moderator')) {
		echo "You are an moderator\n";
	}
	if ($user->hasPermission('user')) {
		echo "Hello User\n";
	}



} else { ?>

	<p>You need to <a href="login.php">Login</a> or <a href="register.php">register</a>!</p>

<?php
}
?>