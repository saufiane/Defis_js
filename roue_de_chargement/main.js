const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;
const skip = document.getElementById("skip");


// si setTimeout (showContent()=> appel imediat de la fonction
// fonction de callback sont appeler immediatement si on met les ()
// voir iife
window.onload = setTimeout(showContent, 3000);
skip.addEventListener("click", showContent);
function showContent() {
  content.style.display = "block";
  loading.style.display = "none";
}
 