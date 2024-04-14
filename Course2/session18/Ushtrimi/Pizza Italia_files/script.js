let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

$(document).ready(function () {
  var $list = $(".box-container .filterDiv").hide(),
    $content;

  $(".button")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      $content = $list.filter("." + this.id).hide();
      $content.slice(0, 6).show();
      $list.not($content).hide();
    })
    .filter(".active")
    .click();

  $("#LoadMore").on("click", function () {
    $content.filter(":hidden").slice(0, 6).slideDown();
    if ($content.filter(":hidden").length == 0) {
      $($("#LoadMore").fadeOut("slow"));
    }
  });

  $(".button").on("click", function () {
    $("#LoadMore").show();
  });
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();
