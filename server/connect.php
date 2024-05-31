<?php
$serverName = "localhost"; 
$database = "photographerDB";
$uid = "admin"; 
$pwd = "admin"; 

$connectionOptions = array(
    "Database" => $database,
    "UID" => $uid,
    "PWD" => $pwd,
    "TrustServerCertificate" => true,
    "CharacterSet" => "UTF-8"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);
?>