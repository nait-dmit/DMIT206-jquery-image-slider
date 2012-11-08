$(document).ready(function() {

  var slider = $('.slider');

  setInterval(function(){
    slider.animate({ 'left': -500 });
  }, 3000);

});
