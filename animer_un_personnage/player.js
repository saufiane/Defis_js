const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
        player.style.backgroundImage = "url('img/walkingback.png')"
    }else{
        player.style.backgroundImage = "url('img/walkingback1.png')"
    }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/walkingright.png')"
    }else{
      player.style.backgroundImage = "url(img/walkingright1.png"
    }
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/walkingdown.png')"
    }else{
      player.style.backgroundImage = "url('img/walkingfront.png')"
    }
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/walkingleft.png')"
    }else{
      player.style.backgroundImage = "url('img/walkingleft1.png')"
    }
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});