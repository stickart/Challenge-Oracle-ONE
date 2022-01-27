

var botonencriptar = document.querySelector("#b_copiar");
botonencriptar.addEventListener("click",function(event){
  event.preventDefault();  
var copyText = document.querySelector("#texto2");
copyText.disabled = false
error_vacio.classList.remove("visibleerror");
error_vacio.classList.add("invisible");
if (copyText.value=="") {
    error_vacio.classList.remove("invisible");
    error_vacio.classList.add("visibleerror");
} else {
    copyText.select();
  document.execCommand("copy");
}
copyText.disabled = true
  
})