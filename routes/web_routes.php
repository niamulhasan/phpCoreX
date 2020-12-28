<?php
//echo "This is web_route file\n";

Route::set('index.php', function () {
    IndexController::createView('IndexView');
});

Route::set('example', function () {
    ExampleController::createView('ExampleView');
});

Route::set('contact-us', function () {
    echo "Contact Us from route function";
});

//built-in Routes
Route::set('login', function () {
    UserController::createView('Users/LoginView');
});
Route::set('loginAction', function () {
    UserController::loginAction();
});

Route::set('signup', function () {
    UserController::createView('Users/SignupView');
});
Route::set('signupAction', function () {
    UserController::signupAction();
});

Route::set('user-list', function () {
    //UserListController::CreateView('UserListView');
    UserController::userList();
});



//Admin
Route::set('admin', function () {
    //UserListController::CreateView('UserListView');
    AdminController::createView('Admin/MainView');
});
Route::set('admin/login', function () {
    //UserListController::CreateView('UserListView');
    AdminController::createView('Admin/LoginView');
});

Route::set('admin/adminLoginAction', function () {
    AdminController::AdminLoginAction();
});
