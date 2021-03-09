  //Hauteur de ma div
  console.log(document.documentElement.scrollHeight)
  //Hauteur affichage
  console.log(document.documentElement.clientHeight)
  window.onscroll = function () { scrollIndicator() };
  function scrollIndicator() {
      //La chauteur de ma div
      var hauteurDocument = document.documentElement.scrollHeight - document.documentElement.clientHeight
      //De combien je pixel j'ai scrollé
      var deCombienJeSuisDescendu = document.documentElement.scrollTop
      //Calcul du ratio
      var scroll = (deCombienJeSuisDescendu / hauteurDocument) * 100
      document.getElementById("bar").style.width = scroll + "%"
  }

// Déclarez une variable qui indique le nombre de pixels dont le contenu de l'élément <html> a défilé vers le haut ;
// Déclarez une autre variable dans laquelle vous récupérez la mesure de la hauteur du contenu de l'élément <html> (cette hauteur est constante tant que vous ne redimensionnez pas la fenêtre) ;
// Déclarez une variable qui renvoie la hauteur intérieure en pixels de l'élément <html> (cette hauteur est elle aussi constante tant que vous ne redimensionnez pas la fenêtre) ;
// Déclarez une variable qui contient une opération arithmétique : soustrayez la hauteur intérieure en pixels de l'élément <html> de la hauteur du contenu de l'élément <html>  afin d'obtenir la hauteur de votre écran ;
// Déclarez une variable qui contient le calcul du pourcentage de votre scroll  : le nombre de pixels dont le contenu de l'élément <html> a défilé vers le haut divisé par la hauteur de votre écran, et multipliez le résultat par 100 ;
// Appliquez la valeur obtenue à la width de la div qui a l'id « bar ».
