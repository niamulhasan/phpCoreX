<form action="loginAction" method="POST">
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
	<br />
	<input type="submit" value="Login">
</form>