$(document).ready(function () {
  $('#kontaktForm').submit(function (e) {
    e.preventDefault();

    const imie = $('#imie').val();
    const nazwisko = $('#nazwisko').val();
    const email = $('#email').val();

    $.ajax({
      url: 'zapisz.php',
      method: 'POST',
      data: {
        imie: imie,
        nazwisko: nazwisko,
        email: email
      },
      success: function (response) {
        if (response.includes("Sukces")) {
          $('#formularzWynik')
            .removeClass('d-none')
            .addClass('alert-success')
            .text("Dane zostały zapisane!");
        } else {
          $('#formularzWynik')
            .removeClass('d-none')
            .addClass('alert-danger')
            .text("Wystąpił problem przy zapisie.");
        }

        $('#kontaktForm')[0].reset();
      },
      error: function () {
        alert("Błąd połączenia z serwerem.");
      }
    });
  });
});
