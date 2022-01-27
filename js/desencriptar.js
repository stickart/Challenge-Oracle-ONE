var botondesencriptar = document.querySelector("#b_decrypt");
botondesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    
    
    var textoaencriptar = document.querySelector("#to_encrypt");
    
    error_minuscula.classList.remove("visibleerror");
    error_minuscula.classList.add("invisible");
    textoaprocesar = textoaencriptar.value;
    var todoenminusculas = validarmayusculas(textoaprocesar);
    
    // define letra a cada letra como no usada con un N con el largo del texto a procesar. Si es usada se le pone U y la saltea
    // separado es un array con cada letra del texto a procesar
    letrasusadas = [];
    separado = [];
    for (i = 0; i < textoaprocesar.length ; i++) {
        letrasusadas[i] = "N";
        separado.push(textoaprocesar.slice(i,i+1));

    }
// separado es un array con cada letra del texto a procesar

if  (todoenminusculas == true) {
    
    textoencriptadounido="";
 //   datosencriptado = [{letra:"e",convertida:"enter"},{letra:"i",convertida:"imes"},{letra:"a",convertida:"ai"},
 //   {letra:"o",convertida:"ober"},{letra:"u",convertida:"ufat"}];

    for (i = 0; i < textoaprocesar.length ; i++) {
if  (letrasusadas[i] == "N") { 
    
    for (let letras of datosencriptado) {
    paracomparar ="";
    for (a=0;a<letras.convertida.length;a++){
    paracomparar = paracomparar + separado[i+a];};  
        if (letras.convertida == paracomparar) {
            for (x=1;x<letras.convertida.length;x++){letrasusadas[i+x] = "U";}
            
        }};

letrasusadas[i] = "U";
textoencriptadounido = textoencriptadounido + separado[i];
console.log(separado);
console.log(textoencriptadounido);
} 
   }
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