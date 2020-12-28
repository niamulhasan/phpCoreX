<?php

class AdminController extends Controller
{
    public static function adminLoginAction()
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
            Redirect::to("http://localhost/" . Config::get('app_variables/root_url') . '/admin');
        }
    }
}
