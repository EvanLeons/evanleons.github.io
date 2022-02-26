$(document).ready(function () {
  $('.meter').waypoint(function () {
    $('.meter').css({
      animation: "animate-positive 2.5s",
      opacity: "1"
    });
  }, { offset: '75%' });
});
