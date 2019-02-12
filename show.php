<?php include 'partials/header.php'; ?>

  <div class="container show" data-id="<?php echo $_GET['id']; ?>">
    <div class="row">
      <div class="col-12">
        <h1>Ospite con id: <?php echo $_GET['id']; ?></h1>
      </div>
    </div>
    <div class="row">
      <div class="col12">
        <div class="content">

        </div>
      </div>
    </div>
  </div>

  <script id="show-ospite" type="text/x-handlebars-template">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        {{name}} {{lastname}} ({{id}})
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Data di nascita: {{date_of_birth}}</li>
        <li class="list-group-item">Tipo Documento: {{document_type}}</li>
        <li class="list-group-item">Numero documento: {{document_number}}</li>
        <li class="list-group-item">Creato il: {{created_at}}</li>
        <li class="list-group-item">Aggiornato il: {{updated_at}}</li>
      </ul>
    </div>
  </script>

<?php include 'partials/footer.php'; ?>
