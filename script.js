function wczytajDane() {
  $.ajax({
    url: 'odczyt.php',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      let html = '<table class="table table-bordered table-striped">';
      html += '<thead><tr><th>Imię</th><th>Nazwisko</th><th>E-mail</th></tr></thead><tbody>';

      data.forEach(row => {
        html += `<tr>
          <td>${row.imie}</td>
          <td>${row.nazwisko}</td>
          <td>${row.email}</td>
        </tr>`;
      });

      html += '</tbody></table>';
      $('#tabelaDanych').html(html);
    },
    error: function () {
      $('#tabelaDanych').html('<p class="text-danger">Błąd podczas ładowania danych.</p>');
    }
  });
}

// Wywołaj przy załadowaniu strony
$(document).ready(function () {
  wczytajDane();

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
          $('#kontaktForm')[0].reset();
          wczytajDane(); // 🔄 aktualizuj listę po zapisie
        } else {
          $('#formularzWynik')
            .removeClass('d-none')
            .addClass('alert-danger')
            .text("Wystąpił problem przy zapisie.");
        }
      },
      error: function () {
        alert("Błąd połączenia z serwerem.");
      }
    });
  });
});
