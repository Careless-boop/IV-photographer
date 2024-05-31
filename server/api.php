<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once('connect.php');

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

$typesQuery = "SELECT id, type FROM photography_types";
$typesStmt = sqlsrv_query($conn, $typesQuery);

if ($typesStmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

$photographyData = [];

while ($typeRow = sqlsrv_fetch_array($typesStmt, SQLSRV_FETCH_ASSOC)) {
    $typeId = $typeRow['id'];
    $typeName = $typeRow['type'];

    $servicesQuery = "SELECT name, price, notes FROM services WHERE photography_type_id = ?";
    $servicesParams = array($typeId);
    $servicesStmt = sqlsrv_query($conn, $servicesQuery, $servicesParams);

    if ($servicesStmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    $services = [];
    while ($serviceRow = sqlsrv_fetch_array($servicesStmt, SQLSRV_FETCH_ASSOC)) {
        $services[] = [
            'name' => $serviceRow['name'],
            'price' => (float) $serviceRow['price'],
            'notes' => $serviceRow['notes']
        ];
    }

    $photographyData[] = [
        'type' => $typeName,
        'services' => $services
    ];
}

sqlsrv_free_stmt($typesStmt);
sqlsrv_close($conn);

echo json_encode($photographyData);
?>