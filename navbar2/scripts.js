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
  
  // For Who we are
  
  $(document).ready(function () {
    $("#over").hover(function () {
      $("#over-content").toggleClass("d-block");
      $("#aboutus-content").toggleClass("d-none");
      $("#technology-content").toggleClass("d-none");
      $("#team-content").toggleClass("d-none");
    });
  
    $("#technology").hover(function () {
      $("#technology").toggleClass("d-block");
      $("#aboutus-content").toggleClass("d-none");
      $("#team-content").toggleClass("d-none");
      $("#over-content").toggleClass("d-none");
    });
    $("#aboutus").hover(function () {
      $("#aboutus-content").toggleClass("d-block");
      $("#technology-content").toggleClass("d-none");
      $("#over-content").toggleClass("d-none");
      $("#team-content").toggleClass("d-none");
    });
    $("#team").hover(function () {
      $("#team-content").toggleClass("d-block");
      $("#technology-content").toggleClass("d-none");
      $("#over-content").toggleClass("d-none");
      $("#aboutus-content").toggleClass("d-none");
    });
  });