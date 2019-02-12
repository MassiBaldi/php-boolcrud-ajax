<?php

  include '../env.php';

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    echo 'Si è verificato un errore';
    die();
  }

  $id = $_GET['id'];

  $sql = "SELECT * FROM `ospiti` WHERE `id` = $id";

  $result = $conn->query($sql);

  $ospite = [];

  if ($result->num_rows > 0) {
    $ospite = $result->fetch_assoc();
  }

  echo json_encode($ospite);

?>
