$(document).ready(function() {

  var slider = $('.slider');
  var start_position = 0;
  var end_position = -1000;

  setInterval(function(){

    console.log(slider.position().left);

    if (slider.position().left <= end_position) {
      slider.animate({ 'left': start_position });
    } else {
      slider.animate({ 'left': "-=500px" });
    };

  }, 3000);

});
