let bookList = [
  {
    cover: "../assets/to-kill-a-mockingbird.jpg",
    featured: true,
    price: "15.99",
  },
  {
    cover: "../assets/becoming.jpg",
    featured: true,
    price: "25.99",
  },
  {
    cover: "../assets/firestarter.jpg",
    featured: true,
    price: "19.99",
  },
  {
    cover: "../assets/twilight-box-set.jpg",
    featured: false,
    boxset: true,
    price: "19.99",
  },
  {
    cover: "../assets/hp-box-set.jpg",
    featured: false,
    boxset: true,
    price: "100",
  },
  {
    cover: "../assets/got-box-set.jpg",
    featured: false,
    boxset: true,
    price: "100",
  },
  {
    cover: "../assets/finding me.jpg",
    featured: false,
    blackHistoryBooks: true,
    price: "27.99",
  },
  {
    cover: "../assets/mlk-biography.jpg",
    featured: false,
    blackHistoryBooks: true,
    price: "19.99",
  },
  {
    cover: "../assets/elenor-roosevelt-biography.jpg",
    featured: false,
    blackHistoryBooks: true,
    price: "17.99",
  },
  {
    cover: "../assets/misery.jpg",
    featured: false,
    horrorBook: true,
    price: "19.99",
  },
  {
    cover: "../assets/frankenstein.jpg",
    featured: false,
    horrorBook: true,
    price: "15.99",
  },
  {
    cover: "../assets/phantoms.jpg",
    featured: false,
    horrorBook: true,
    price: "19.99",
  },
  {
    cover: "../assets/winnie the pooh.jpg",
    featured: false,
    childrensBook: true,
    price: "19.99",
  },
  {
    cover: "../assets/cat and the hat.jpg",
    featured: false,
    childrensBook: true,
    price: "15.99",
  },
  {
    cover: "../assets/fun facts about space.jpg",
    featured: false,
    childrensBook: true,
    price: "7.99",
  },
];

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("page:", pageID);

  if (pageID == "") {
    pageID = "home";
  }
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
  })
    .done(function () {
      console.log("page load success"); // For loading content.
      switch (pageID) {
        case "home":
          bookList.forEach((bookItem) => {
            if (!bookItem.featured) return;
            $("#featuredBookShowcase").append(createBookElement(bookItem));
          });
          break;
        case "books":
          bookList.forEach((bookItem) => {
            if (bookItem.boxset) {
              $("#booksets").append(createBookElement(bookItem));
            } else if (bookItem.blackHistoryBooks) {
              $("#blackHistoryBooks").append(createBookElement(bookItem));
            } else if (bookItem.horrorBook) {
              $("#horrorBooks").append(createBookElement(bookItem));
            } else if (bookItem.childrensBook) {
              $("#childrensBooks").append(createBookElement(bookItem));
            }
          });
          break;

        default:
          break;
      }
    })
    .fail(function (e) {
      $("#app").html(`${pageID} | Error ${e.status}: ${e.statusText}`);
    });
}

function createBookElement(bookItem) {
  return `
          <div class="bookItem">
            <div class="cover" style="background-image: url('${bookItem.cover}')"></div>
            <div class="details">
            <div class="description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.
            </div>
            <div class="price">$${bookItem.price}</div>
            <button class="addToCartBtn"><span>ADD TO CART</span></button>
          </div>
          </div>`;
}
