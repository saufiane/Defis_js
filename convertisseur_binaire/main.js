const convert = document.getElementById("convert");

convert.addEventListener("click", function(){
    let input= document.getElementById("msgToCode").value;
    // click convert ecoute
    // recup dans txt
    // moulinette txt en bin string to binary
    // faire test regu en console console.log();
    // afficha dans id="crypted"

    
    
    // recup les données entrée dans le champ
    let output= document.getElementById("crypted");
    console.log(input);

     output.value="";
    //  convertir en binaire
           for (var i= 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
            
}   
        console.log(i);
        console.log(output.value);
        //afficher le result 
        output.innerHTML = output.value;

});
  
//charCodeAt = sa renvoie le code ASCII;
//toString(2) = renvoi le code  en Binaire;
