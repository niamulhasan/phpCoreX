<?php
    //echo "This is web_route file\n";

    Route::set('index.php', function(){
        IndexController::createView('IndexView');
    });

    Route::set('example', function(){
        ExampleController::createView('ExampleView');
    });

    Route::set('contact-us', function(){
        echo "Contact Us from route function";
    });


    //built-in Routes
    Route::set('login', function(){
        LoginController::createView('LoginView');
    });
    Route::set('signup', function(){
        SignupController::createView('SignupView');
    });
    Route::set('user-list', function(){
        //UserListController::CreateView('UserListView');
        UserListController::userList();
    });