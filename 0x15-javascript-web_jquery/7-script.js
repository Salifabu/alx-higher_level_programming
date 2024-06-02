(function () {
  $.ajax({
    url: 'https://swapi.co/api/people/5/?format=json',
    success: function (data, status) {
      $('div#character').text(data.name);
    }
  });
})();
