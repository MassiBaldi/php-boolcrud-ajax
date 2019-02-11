<?php include 'partials/header.php' ?>

  <div class="container index">
    <div class="row">
      <div class="col-12">
        <h1>Tutti gli ospiti</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Visualizza</th>
              <th>Cancella</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script id="row-ospite" type="text/x-handlebars-template">
    <tr>
      <td>{{id}}</td>
      <td>{{name}}</td>
      <td>{{lastname}}</td>
      <td>
        <a href="#" class="btn btn-primary">Visualizza</a>
      </td>
      <td>
        <button class="btn btn-danger delete-button" data-id="{{id}}">Cancella</button>
      </td>
    </tr>
  </script>

<?php include 'partials/footer.php' ?>
