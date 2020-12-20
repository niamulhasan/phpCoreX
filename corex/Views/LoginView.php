<form action="" method="get">
	<input type="text" name="text" id=""/>
	<input type="submit" value="Submit">
</form>

<?php
    print_r(Form::data('text'));
?>