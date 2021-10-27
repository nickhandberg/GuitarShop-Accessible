var previousPosition = window.pageYOffset;
window.onscroll = function() {
  var currentPosition = window.pageYOffset;
  if (previousPosition > currentPosition) {
    document.getElementById("navigation").style.top = "0";
  }
  else {
    document.getElementById("navigation").style.top = "-100px";
  }
  previousPosition = currentPosition;
};