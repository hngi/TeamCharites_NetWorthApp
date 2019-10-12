<?php
$con = mysqli_connect('sql12.freemysqlhosting.net','sql12308286', 'ZwVT4iplj3');
mysqli_select_db($con,'sql12308286');

$messages='';
$error='';



// Processing form data when form is submitted
if(isset($_POST['submit'])){

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["number"]);
    $message = trim($_POST["message"]);

if(empty($name)){
   $error='name field cant be empty';
}
elseif (empty($email)){
    $error='Mail field Cant be empty';
}
elseif(empty($phone)){
   $error='Phone Field cant be empty';
}
elseif (empty($message)){
    $error='message field cant be empty';
}
elseif (!filter_var($email,FILTER_VALIDATE_EMAIL)){
    $error='Invalid Email Address';
}
else {


    $sql = "INSERT INTO contact (`name`,`email`,`phone`,`message`) VALUES (?, ?, ?, ? )";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($name,$email,$phone,$message);
    if(mysqli_stmt_execute($stmt)){
        $messages='message sent succesfully';
    }
    else{
        $error="Something went wrong. Please try again later.";
    }
}
}
?>
