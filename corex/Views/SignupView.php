<?php
require_once 'corex/autoload.php';
$response = array();
if(Form::exists()) {
	// if (Token::check(Form::data('token'))) {

		

		$form = new Validate();
		$validation = $form->check($_POST, array(
				'username' => array(
						'required' => true,
						'min' => 2,
						'max' => 200,
						'unique' => 'users' //here 'users' is  the  table name. and field name is same to the HTML form's field
					),
				'password' => array(
						'required' => true,
						'min' => 6
					),
				'password_again' => array(
						'required' => true,
						'matches' => 'password'
					),
				'name' => array(
						'required' => true,
						'min' => 2,
						'max' => 50
					)
			));

		if ($validation->passed()) {
			$user = new User();

			$salt = Hash::salt(32);
			/*echo Hash::generate(Form::data('password'), $salt);*/


			try{
				$user->create(array(
					'username' => Form::data('username'),
					'password' => Hash::generate(Form::data('password'), $salt),
					'salt'     => $salt,
					'name'     => Form::data('name'),
					'joined'   => date('Y-m-d H:i:s'),
					'usrGroup' => 3
				));

				$response['success'] = true;
				$response['message'] = "Registration Successful! You can Login now!";

			} catch(Exception $e){
				die($e->getMessage());
			}
			


		} else {
			$response['success'] = false;
			$x = 1;
			foreach ($validation->errors() as $error) {
				$response['message'] = $error;
				$x = $x + 1;
			}
		}

    //} //if end of Token check
}

echo json_encode($response);
?>


<form action="" method="post">
	<div class="field">
		<label for="username">Username</label>
		<input type="text" name="username" id="username" value="<?php echo Form::data('username'); ?>" autocomplete="off"> 
	</div>

	<div class="field">
		<label for="password">Password</label>
		<input type="password" name="password" id="password" value=""> 
	</div>

	<div class="field">
		<label for="password_again">Password Again</label>
		<input type="password" name="password_again" id="password_again" value=""> 
	</div>

	<div class="field">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" value="<?php echo Form::data('name'); ?>"> 
	</div>

	<input type="hidden" name="token" value="<?php echo Token::generate(); ?>">
	<input type="submit" value="Resister">
</form>