$(() => {
  $('#createGameRoom').click((event) => {
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/",
      data: {
        username: $('#username').val(),
        game: $('#game').val(),
        method: "create",
      },
      success: (res) => {
        $('html').html(res);
      },
    });
  });
});