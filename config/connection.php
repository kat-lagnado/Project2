<?php

$user= 'root';
$pass= 'password';
$db ='outfits_db';

$db = new mysqli('localhost',$user,$pass, $db) or die ("Unable to connect");

echo"grear work!!!";


?>