# phpCoreX
# Author: Niamul Hasan
phpCoreX is a php library for php-mysql user management system. This can be used to create any project requires a user registration, login. multi-level permission etc. 

It got the basic skeleton of a user management system with multilevel user permission.




Welcome to the phpCoreX wiki!

# How to Pass Parameters from Controller to View:

### in `routes/web_route.php`

```php
Route::set('user-list', function () {
    UserController::userList();
});
```


### in Controller corex/Controllers/UserController.php
  ```php
public static function userList()
    {
        $userData = DB::operation()->query("SELECT * FROM users")->results();

        self::createView('UserListView', $userData);
    }
```

### In the View `corex/View/UserListView.php`
```php
<?php print_r(self::$params);  ?>
```
