<h1>Bla</h1>

<?php 

//print_r(self::$params); 

foreach (self::$params as $user){
    echo $user->id;
    echo " - ";
    echo $user->username;
    echo " - ";
    echo $user->name;
    echo "<br/>";
}

?>