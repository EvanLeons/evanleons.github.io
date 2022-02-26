$(document).ready(function () {
  $('.meter').waypoint(function () {
    $('.progress').css({
      animation: "animate-positive 2s",
      opacity: "1"
    });
  }, { offset: '75%' });
});
