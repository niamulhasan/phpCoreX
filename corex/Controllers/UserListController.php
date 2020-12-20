<?php

class UserListController extends Controller {
    
    public static function userList(){
        $userData = DB::operation()->query("SELECT * FROM users")->results();

        self::createView('UserListView', $userData);
    }
    
}