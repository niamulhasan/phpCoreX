<h1>Welcome CoreX is Up!</h1>

<?php 

    function paramPurse($path = null){
        if ($path){
            $path = explode('/', $path);
            print_r($path);


        }
        else {
            //echo "Path is null";
        }
    }

    paramPurse("login/user/password");

    print("\n");

    $str = "{user}";
    if (strpos($str, '{') === 0 && strpos($str, '}') === strlen($str)-1) {
        print("Boo Yeah");
     }