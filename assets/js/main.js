function myFunction() {
  var checkBox = document.getElementById("myCheck1");
  if (checkBox.checked == true){
    document.querySelector(".form_btn_next" ).className = "form_btn_next active";
    document.querySelector(".form_btn_next.active").disabled = false;
    
  } else {
    document.querySelector(".form_btn_next").className = "form_btn_next noactive";
    document.querySelector(".form_btn_next.noactive").disabled = true;
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
function loader() {
  document.querySelector(".full_loader").style.display = "block" ;
  
}