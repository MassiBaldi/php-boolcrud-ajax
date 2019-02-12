$(document).ready(function(){

  if ($('.container.index').length > 0) {
    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/all.php',
      method: 'GET',
      success: function(data)
      {
        var results = JSON.parse(data);

        printGuests(results);
      },
      error: function()
      {
        alert('Si è verificato un errore');
      }
    });
  }

  if ($('.container.show').length > 0) {
    var dataId = $('.container.show').data('id');

    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/show.php',
      method: 'GET',
      data: {
        id: dataId
      },
      success: function(data)
      {
        var result = JSON.parse(data);

        printCard(result);
      },
      error: function()
      {
        alert('Si è verificato un errore');
      }
    });
  }

  $(document).on('click', '.delete-button', function() {
    var dataId = $(this).data('id');

    console.log(dataId);

    var myThis = $(this);

    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/delete.php',
      method: 'POST',
      data: {
        id: dataId
      },
      success: function(data) {

        if (data == 'success') {
          myThis.parent().parent().addClass('d-none');
        }
      },
      error: function() {
        alert('Si è verificato un errore');
      }
    });
  });

});




function printGuests(results) {
  for (var i = 0; i < results.length; i++) {
    var ospite = results[i];

    var source   = $('#row-ospite').html();
    var template = Handlebars.compile(source);
    var context = {
      id: ospite.id,
      name: ospite.name,
      lastname: ospite.lastname
    };

    var html = template(context);

    $('tbody').append(html);
  }
}

function printCard(ospite) {
  var source   = $('#show-ospite').html();
  var template = Handlebars.compile(source);

  var context = {
    id: ospite.id,
    name: ospite.name,
    lastname: ospite.lastname,
    date_of_birth: ospite.date_of_birth,
    document_type: ospite.document_type,
    document_number: ospite.document_number,
    created_at: ospite.created_at,
    updated_at: ospite.updated_at,
  };
  var html    = template(context);

  $('.content').append(html);
}
