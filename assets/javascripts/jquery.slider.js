$(document).ready(function() {

  var slider = $('.slider');

  setInterval(function(){
    slider.animate({ 'left': "-=500px" });
  }, 3000);

});
