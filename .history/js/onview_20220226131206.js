$(document).ready(function () {
  $('.meter').waypoint(function () {
    $('.meter').css({
      animation: "animate-positive 2s",
      opacity: "1"
    });
  }, { offset: '75%' });
});
