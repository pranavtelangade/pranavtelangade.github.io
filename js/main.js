(function ($) {
  "use strict";
  var nav = $("nav");
  var navHeight = nav.outerHeight();

  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(50)
        .fadeOut(500, function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutExpo");
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $(".scrolltop-mf").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /*--/ Star Counter /--*/
  $(".counter").counterUp({
    delay: 15,
    time: 2000,
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 5,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
      $(".material-symbols-outlined ").addClass("font-green");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
      $(".material-symbols-outlined ").removeClass("font-green");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
    } else {
      $(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }

  /*--/ Testimonials owl /--*/
  $("#testimonial-mf").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
})(jQuery);

/*--/ Mouse Pointer /--*/

const circle = document.querySelector(".mouse-circle");
const point = document.querySelector(".mouse-point");

if (window.innerWidth > 767) {
  document.addEventListener("mousemove", (e) => {
    circle.style.display = point.style.display = `block`;
    document.body.style.cursor = `none`;
    circle.style.top = `${e.pageY - 25}px`;
    circle.style.left = `${e.pageX - 25}px`;
    point.style.top = `${e.pageY - 4}px`;
    point.style.left = `${e.pageX - 4}px`;
  });

  document.addEventListener("mouseleave", () => {
    circle.style.display = point.style.display = `none`;
  });
}

/*--/ Darkmode /--*/

darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function darkmodetoggle() {
  document.body.classList.toggle("light");
  document.body.querySelectorAll(".subtitle-a").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll("h3").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll(".work-box").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll(".service-box").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".s-title").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".s-description").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".service-ico").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.getElementById("mode").innerHTML = `dark_mode`;
}

function lightmodetoggle() {
  document.body.classList.toggle("light");
  document.body.querySelectorAll(".subtitle-a").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll("h3").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll(".work-box").forEach(function (e) {
    e.classList.toggle("light");
  });
  document.body.querySelectorAll(".service-box").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".s-title").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".s-description").forEach(function (e) {
    e.classList.toggle("dark");
  });
  document.body.querySelectorAll(".service-ico").forEach(function (e) {
    e.classList.toggle("dark");
  });
}

if (!darkmode) {
  darkmodetoggle();
}

document.getElementById("mode").addEventListener("click", function () {
  lightmodetoggle();
  if (document.getElementById("mode").innerHTML == `dark_mode`) {
    document.getElementById("mode").innerHTML = `light_mode`;
  } else {
    document.getElementById("mode").innerHTML = `dark_mode`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "d" || e.key == "D") {
    lightmodetoggle();
    if (document.getElementById("mode").innerHTML == `dark_mode`) {
      document.getElementById("mode").innerHTML = `light_mode`;
    } else {
      document.getElementById("mode").innerHTML = `dark_mode`;
    }
  }
});
