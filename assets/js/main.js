function myFunction() {
  var checkBox = document.getElementById("myCheck1");
  if (checkBox.checked == true){
    document.querySelector(".form_btn_next" ).className = "form_btn_next active";
    // document.querySelector(".form_btn_next.active").disabled = false;
    // document.querySelector(".form_btn_next.active").disabled = false;
    document.querySelector(".form_btn_next.active").style.pointerEvents = "visible"

    
  } else {
    document.querySelector(".form_btn_next").className = "form_btn_next noactive";
    document.querySelector(".form_btn_next.noactive").style.pointerEvents = "none"
  }
}
// === 
function myInfo() {
  var checkBox = document.getElementById("changeinfo");
  if (checkBox.checked){
    document.querySelector(".img-fluid.change__img").src='assets/img/humano.svg';
    document.querySelector(".form_row_small").innerHTML = "Nombre y apellido";
  } else {
    document.querySelector(".img-fluid.change__img").src='assets/img/ars-logo.svg';
    document.querySelector(".form_row_small").innerHTML = "Solicitud de autenticación";
  }
}
// === 
var preloader = document.getElementById('load_icon');
function load__() {
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 1500)
}