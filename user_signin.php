<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the singin records
$username = $_POST['username'];
$email = $_POST['email'];
$name = $_POST['name'];
$password = $_POST['password'];


// database insert SQL code
$sql = "INSERT INTO `USER` (`username`, `email`, `name`, `password`) VALUES ('0', '$username', '$email', '$name', '$password')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Signup Complete!";
}

?>
