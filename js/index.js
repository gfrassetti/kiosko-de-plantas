const cartBtn = document.getElementById("cart-btn");
const cart = document.querySelector(".sidebar-container");
const closeCart = document.getElementById("close-cart");

$(window).on("scroll", scrollAnimation);

//Hambuerguer animation
$(document).ready(() => {
  $("#nav-icon1").on("click", function () {
    $(this).toggleClass("open");
  });
});
//Increase height of header on hamburger-nav
function increaseHeader() {
  const header = document.querySelector("header");
  if (header.className === "scroll") {
    header.style.height = "170px";
  }
  if ($("#hamburger").hasClass("collapsed")) {
    header.style.height = "unset";
  }
}

//Progressbar
function progressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".my-bar").style.width = `${scrolled}%`;
}

//Show cart
function showCart() {
  cartBtn.onclick = () => {
    console.log("click");
    cart.classList.remove("hidden");
  };

  closeCart.onclick = () => {
    cart.classList.add("hidden");
  };
}

//Scroll anim
function scrollAnimation() {
  if ($(window).scrollTop() > 25) {
    $("header").addClass("scroll");
    $("#logo").attr("src", "images/img/logo/logo2white.png");
    $(".return-to-top").removeClass("hidden");
    $(".my-bar").removeClass("hidden");
    $(".nav-newcolor").removeClass("navbar-light");
    $(".nav-newcolor").addClass("navbar-dark");
    $(".logo-banner").css("padding-top", 15);
    progressBar();
  } else {
    $("header").removeClass("scroll");
    $("#logo").attr("src", "images/img/logo/logo-removebg-preview.png");
    $(".return-to-top").addClass("hidden");
    $(".my-bar").addClass("hidden");
    $(".nav-newcolor").removeClass("navbar-dark");
    $(".nav-newcolor").addClass("navbar-light");
  }
}

showCart();
