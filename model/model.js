export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("page:", pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}
