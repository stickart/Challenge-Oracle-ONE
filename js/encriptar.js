var botonencriptar = document.querySelector("#b_encrypt");
botonencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var textoaencriptar = document.querySelector("#to_encrypt");
    var todoenminusculas = true;
    error_minuscula.classList.remove("visibleerror");
    error_minuscula.classList.add("invisible");
    textoaprocesar = textoaencriptar.value;
    todoenminusculas = validarmayusculas(textoaprocesar);
    

if  (todoenminusculas == true) {
    separado = [];
    textoencriptadounido="";
    datosencriptado = [{letra:"e",convertida:"enter"},{letra:"i",convertida:"imes"},{letra:"a",convertida:"ai"},
    {letra:"o",convertida:"ober"},{letra:"u",convertida:"ufat"}];

    for (i = 0; i < textoaprocesar.length ; i++) {
        separado.push(textoaprocesar.slice(i,i+1));
        for (let letras of datosencriptado) {
            if (letras.letra == separado[i]) {
                separado[i] = letras.convertida;
                console.log(letras.letra);
            }};
       
  //      if (separado[i]=="e") { separado[i]="enter";}
  //      if (separado[i]=="i") { separado[i]="imes";}
  //      if (separado[i]=="a") { separado[i]="ai";}
  //      if (separado[i]=="o") { separado[i]="ober";}
  //      if (separado[i]=="u") { separado[i]="ufat";}
        textoencriptadounido = textoencriptadounido + separado[i];

   };

   console.log(separado);
   console.log(todoenminusculas);
   document.getElementById("texto2").value = textoencriptadounido;
   console.log(textoencriptadounido);

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

    return;
}});

