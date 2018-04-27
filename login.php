<?php
require_once 'corex/autoload.php';

$response = array();

if (Form::exists()) {
	if (Token::check(Form::data('token'))) {
		
		$validate = new Validate();
		$validation = $validate->check($_POST, array(
			'username' => array('required' => true),
			'password' => array('required' => true)
		));

		if($validation->passed()){

			$user = new User();

			$remember = (Form::data('remember') === 'on') ? true : false; 
			$login = $user->login(Form::data('username'), Form::data('password'), $remember);

			if ($login) {
				$response["success"] = true;
				$response["message"] = "Login Successful!";

				//Getting userinfo
					$user = new User($username);
					if (!$user->exists()) {
						Redirect::to(404);
					} else {
						$data = $user->data();
					}
					$response["email"] = $data->username;
					$response["name"] = $data->name;

			} else {
				$response["success"] = false;
				$response["message"] = "Invalid Username or Password";
			}

		} else {
			foreach ($validation->errors() as $error) {
				$response["message"] = $error;
			}
		}
	}
	echo json_encode($response);
}
?>



<form action="" method="post">
	<div class="field">
		<label for="username">Username</label>
		<input type="text" name="username" id="username" autocomplete="off">
	</div>
	<div class="field">
		<label for="password">Username</label>
		<input type="password" name="password" id="password">
	</div>
	<div class="field">
		<label for="remember">
		<input type="checkbox" name="remember" id="remember"> Remember Me
		</label>
	</div>


		<input type="hidden" name="token" value="<?php echo Token::generate(); ?>">
		<br/>
		<input type="submit" value="Login">
</form>