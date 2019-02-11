<?php

  include '../env.php';

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    echo 'Si è verificato un errore';
    die();
  }

  $sql = 'SELECT * FROM `ospiti`';

  $results = $conn->query($sql);

  $ospiti = [];

  if ($results->num_rows > 0) {

    while ($row = $results->fetch_assoc()) {
      $ospiti[] = $row;
    }
  }

  echo json_encode($ospiti);

  $conn->close();
?>
