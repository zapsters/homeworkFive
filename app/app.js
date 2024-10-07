import * as MODEL from "../model/model.js";

function navListeners() {
  $("nav .account a").on("click", function (e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
  });
  $("nav .hamburgerMenu").on("click", function (e) {
    console.log($("nav .mobileClickables").css("transform"));
    if (
      $("nav .mobileClickables").css("transform") ==
      "matrix(1, 0, 0, 0, 0, 248)"
    ) {
      $("nav .mobileClickables").css(
        "transform",
        "translateY(100%) scaleY(100%)"
      );
    } else {
      $("nav .mobileClickables").css("transform", "translateY(100%) scaleY(0)");
    }
  });
}

function initURLListener() {
  $(window).on("hashchange", MODEL.changeRoute);
  MODEL.changeRoute();
  navListeners();
}

$(document).ready(function () {
  initURLListener();
});
