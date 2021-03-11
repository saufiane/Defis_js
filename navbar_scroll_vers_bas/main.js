window.onscroll = slideDown;
let nav = document.getElementById("navbar");

function slideDown() {
  //   console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 56) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-56px";
  }
}
