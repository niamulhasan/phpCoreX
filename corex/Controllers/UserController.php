<?php

class UserController extends Controller
{

    public static function loginAction()
    {
        $response = array();

        if (Form::exists()) {
            if (Token::check(Form::data('token'))) {

                $validate = new Validate();
                $validation = $validate->check($_POST, array(
                    'username' => array('required' => true),
                    'password' => array('required' => true)
                ));

                if ($validation->passed()) {

                    $user = new User();

                    $remember = (Form::data('remember') === 'on') ? true : false;
                    $login = $user->login(Form::data('username'), Form::data('password'), $remember);

                    if ($login) {
                        $response["success"] = true;
                        $response["message"] = "Login Successful!";

                        //Getting userinfo
                        $user = new User(Form::data('username'));
                        if (!$user->exists()) {
                            Redirect::to(404);
                        } else {
                            $data = $user->data();
                        }
                        $response["email"] = $data->username;
                        $response["name"] = $data->name;
                    } else {
                        $response["success"] = false;
                        $response["message"] = "Invalid Username or Password";
                    }
                } else {
                    foreach ($validation->errors() as $error) {
                        $response["message"] = $error;
                    }
                }
            }
            echo json_encode($response);
        }
    }


    public static function signupAction()
    {
        $response = array();
        if (Form::exists()) {
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


                try {
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
                } catch (Exception $e) {
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
    }


    public static function userList()
    {
        $userData = DB::operation()->query("SELECT * FROM users")->results();

        self::createView('Users/UserListView', $userData);
    }
}
