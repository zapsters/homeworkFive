import * as MODEL from "../model/model.js";

function navListeners() {
  $("nav .account a").on("click", function (e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
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
