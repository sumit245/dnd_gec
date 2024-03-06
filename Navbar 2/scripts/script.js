$(document).ready(function () {
  $("#overview").hover(function () {
    $("#overview-content").toggleClass("d-block");
    $("#industries-content").toggleClass("d-none");
    $("#service-content").toggleClass("d-none");
  });

  $("#industries").hover(function () {
    $("#industries-content").toggleClass("d-block");
    $("#overview-content").toggleClass("d-none");
    $("#service-content").toggleClass("d-none");
  });
  $("#services").hover(function () {
    $("#service-content").toggleClass("d-block");
    $("#industries-content").toggleClass("d-none");
    $("#overview-content").toggleClass("d-none");
  });
});
