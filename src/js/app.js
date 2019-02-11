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
