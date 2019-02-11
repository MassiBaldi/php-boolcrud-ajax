<?php

  include '../env.php';

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    echo 'Si è verificato un errore';
    die();
  }

  $id = $_POST['id'];

  if (empty($id)) {
    echo 'Si è verificato un errore';
    die();
  }

  $sql = "DELETE FROM `ospiti` WHERE `id` = $id;";

  $result = $conn->query($sql);

  if ($result) {
    echo 'success';
  }
  else {
    echo 'errore';
  }


?>
