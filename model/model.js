export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("page:", pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    }).fail(function (e) {
      alert(`${pageID} | ${e.status}: ${e.statusText}`);
      $("#app").html(`${e.status}: ${e.statusText}`);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    }).fail(function (e) {
      alert(`${pageID} | ${e.status}: ${e.statusText}`);
      $("#app").html(`${e.status}: ${e.statusText}`);
    });
  }
}
