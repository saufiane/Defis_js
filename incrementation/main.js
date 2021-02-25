const myBtn = document.getElementById('myBtn') ;
const cntClic = document.getElementById('cntClic');

var nbClic = 0;



myBtn.addEventListener('click', function()
{
 ++ nbClic;
    console.log(nbClic);
    cntClic.innerHTML= 'Tu as cliqué' +nbClic+ 'fois';


});
   
// utilisez un « addEventListener » sur « myBtn » pour développer la fonction.
// Ajoutez un « console.log » sur « nbClic » dans la fonction afin de pouvoir contrôler le résultat dans la console.

// pour soso

//myBtn
document.getElementById("myBtn");

//ecouter un click addEventListener("click")
//je click sur le bouton qui a l'id myBtn
//document.getElementById("myBtn").addEventListener("click", );

//on doit faire une fonction
//quand (click déclenche la fonction);
// document.getElementById("myBtn").addEventListener("click", function () {
// let toto = "toto";
// console.log(toto);
});
//incrementation js ++ 1 = (1 2 3 4 5 )




