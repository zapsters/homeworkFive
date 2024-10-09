import * as MODEL from "../model/model.js";

function navListeners() {
  $("nav .account a").on("click", function (e) {
    e.preventDefault();
    console.log($(e.currentTarget).attr("href"));
  });
  $("nav .hamburgerMenu").on("click", function (e) {
    console.log($("nav .mobileClickables").css("transform"));
    if ($("nav .mobileClickables").css("transform")[16] == "0") {
      $("nav .mobileClickables").css("transform", "translateY(100%) scaleY(100%)");
    } else {
      $("nav .mobileClickables").css("transform", "translateY(100%) scaleY(0)");
    }
  });
}

function initURLListener() {
  $(window).on("hashchange", function (e) {
    MODEL.changeRoute();
    $("nav .links a").each(function (e) {
      $(this).removeClass("active");
      if ($(this).attr("href") == window.location.hash) $(this).addClass("active");
    });
  });
  MODEL.changeRoute();
  $("nav .links a").each(function (e) {
    $(this).removeClass("active");
    if ($(this).attr("href") == window.location.hash) $(this).addClass("active");
  });
  navListeners();
}

$(document).ready(function () {
  initURLListener();
});
