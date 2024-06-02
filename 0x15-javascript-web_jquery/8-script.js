(function () {
  $.ajax({
    url: 'https://swapi.co/api/films/?format=json',
    success: function (data) {
      data.results.forEach(film => {
        $('ul#list_movies').append(() => {
          return (`<li>${film.title}</li>`);
        });
      });
    }
  }
  );
}
)();
