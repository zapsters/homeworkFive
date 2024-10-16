import * as MODEL from "../model/model.js";

function navListeners() {
  // $("nav .account a").on("click", function (e) {
  //   e.preventDefault();
  //   console.log($(e.currentTarget).attr("href"));
  // });
  $("nav .hamburgerMenu").on("click", function (e) {
    console.log($("nav .mobileClickables").css("transform"));

    $("nav .mobileClickables").css("transition-duration", "0.2s");
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
    updateActiveLinkInNav();
  });
  MODEL.changeRoute();
  updateActiveLinkInNav();
  navListeners();
}

function updateActiveLinkInNav() {
  $("nav a").each(function (e) {
    $(this).removeClass("active");
    if (
      $(this).attr("href") == window.location.hash ||
      ($(this).attr("href") == "#home" && window.location.hash == "")
    )
      $(this).addClass("active");
  });
}

$(document).ready(function () {
  initURLListener();
});
