<?php
require_once 'corex/autoload.php';

$user = new User();

if (!$user->isLoggedIn()) {
	Redirect::to('index.php');
}

if (Form::exists()) {
	if (Token::check(Form::data('token'))) {
		
		$validate = new Validate();
		$validation = $validate->check($_POST, array(
			'password_current' => array(
				'required' => true,
				'min' => 6
			),
			'password_new' => array(
				'required' => true,
				'min' => 6
			),
			'password_new_again' => array(
				'required' => true,
				'min' => 6,
				'matches' => 'password_new'
			)
		));

		if ($validation->passed()) {
			
			if (Hash::generate(Form::data('password_current'), $user->data()->salt) !== $user->data()->password) {
				echo "Please Enter correct currrent password";
			} else {
				$salt = Hash::salt(32);
				$user->update(array(
					'password' => Hash::generate(Form::data('password_new'), $salt),
					'salt' => $salt
				));

				Session::flash('home', 'Your Password has been changed!');
				Redirect::to('index.php');

			}

		} else {
			foreach ($validation->errors() as $error) {
				echo $error;
				echo "<br/>";
			}
		}
	}
}

?>

<form action="" method="POST">
	<div class="field">
		<label for="password_current">Current Password:</label>
		<input type="password" name="password_current" id="password_current">
	</div>

	<div class="field">
		<label for="password_new">New Password:</label>
		<input type="password" name="password_new" id="password_new">
	</div>

	<div class="field">
		<label for="password_again">New Password Again:</label>
		<input type="password" name="password_new_again" id="password_new_again">
	</div>

	<input type="submit" value="Change Password">
	<input type="hidden" name="token" value="<?php echo Token::generate(); ?>">
</form>