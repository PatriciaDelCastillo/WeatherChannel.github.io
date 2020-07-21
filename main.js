$(document).ready(function () {
  //igresar datos al input
  $('.encabezado').on('click', 'button.enviar', function () {
    let ciudad = cargarCiudad()
    document.querySelector(".container").style.visibility = "visible"
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916", function (data) { 
      $("#ciudad").text(data.name)
      $("#temperatura").text(Math.round((data.main.temp) - 273.15))
      $("img").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png ")
      $("#grados").text("°C")
      $("#descripcion").text(data.weather[0].description)

    });
  });

});


function cargarCiudad() {
  let ciudad = $('input[type=text]').val();
  return ciudad
}