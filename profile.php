<?php
require_once 'corex/autoload.php';

if (!$username = Form::data('user')) {
	Redirect::to('index.php');
} else {

	$user = new User($username);
	if (!$user->exists()) {
		Redirect::to(404);
	} else {
		$data = $user->data();
	}
	?>

	<h3><?php echo $data->username; ?></h3>
	<p>Full Name: <?php echo $data->name; ?></p>


	<?php

}