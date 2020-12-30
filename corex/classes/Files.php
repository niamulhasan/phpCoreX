<?php

/**
 * 
 */
class Files
{

    public static function uploadImage($location, $file_name)
    {
        $target_dir = $location;
        $file_name = $file_name;
        $target_file = $target_dir . basename($_FILES[$file_name]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $result = array();

        // Check if image file is a actual image or fake image
        if (isset($_POST["submit"])) {
            $check = getimagesize($_FILES[$file_name]["tmp_name"]);
            if ($check !== false) {
                //echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                //echo "File is not an image.";
                $uploadOk = 0;
            }
        }

        // Check if file already exists
        if (file_exists($target_file)) {
            $result["error"] = "Sorry, file already exists.";
            $uploadOk = 0;
        }

        // Check file size
        if ($_FILES[$file_name]["size"] > 500000) {
            $result["error"] = "Sorry, your file is too large.";
            $uploadOk = 0;
        }

        // Allow certain file formats
        if (
            $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif"
        ) {
            $result["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            $result["message"] = "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES[$file_name]["tmp_name"], $target_file)) {
                $result["location"] = htmlspecialchars(basename($_FILES[$file_name]["name"]));
            } else {
                $result["message"] = "Sorry, there was an error uploading your file.";
            }
        }
        $result["isSucceed"] = $uploadOk;
        return $result;
        //self::createView('Admin/CategoryCreateView');
    }
}
