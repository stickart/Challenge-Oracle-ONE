function validarmayusculas(textoaencriptar2){
    let textoaprocesar2 = textoaencriptar2;
    let okminusculas = true;
    
    for (i = 0; i < textoaprocesar2.length ; i++) {
  paravalidar =  textoaprocesar2.charCodeAt(i);
          if ((paravalidar == 32) || ((paravalidar > 96) && (paravalidar < 123))) {
     ;   
    } else{
            okminusculas = false;
            error_minuscula.classList.remove("invisible");
            error_minuscula.classList.add("visibleerror");
        // accion cuando no coincide
}
}
    return okminusculas;
}