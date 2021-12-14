const cartBtn = document.getElementById("cart-btn");
const cart = document.querySelector(".sidebar-container");
const closeCart = document.getElementById("close-cart");

//Hambuerguer animation
$(document).ready(function () {
  $("#nav-icon1").on("click", function () {
    $(this).toggleClass("open");
  });
});
//Increase height of header on hamburger-nav
function increaseHeader() {
  const header = document.querySelector("header");
  const divNav = document.getElementById("navbarSupportedContent");
  if (header.className === "scroll") {
    header.style.height = "170px";
  }
  if ($("#hamburger").hasClass("collapsed")) {
    header.style.height = "unset";
  }
}
//Progressbar
function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".my-bar").style.width = `${scrolled}%`;
}

cartBtn.onclick = () => {
  console.log("click");
  cart.classList.remove("hidden");
};

closeCart.onclick = () => {
  cart.classList.add("hidden");
};

//Scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
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
});
