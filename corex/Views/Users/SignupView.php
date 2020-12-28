<form action="signupAction" method="post">
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