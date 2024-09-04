document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        document.querySelector('.navbar').classList.add("sticky");
      } else {
        document.querySelector('.navbar').classList.remove("sticky");
      }

      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        document.querySelector('.scroll-up-btn').classList.add("show");
      } else {
        document.querySelector('.scroll-up-btn').classList.remove("show");
      }
    });

    // slide-up script
    document.querySelector('.scroll-up-btn').addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      // removing smooth scroll on slide-up button click
      document.documentElement.style.scrollBehavior = "auto";
    });

    var menuItems = document.querySelectorAll('.navbar .menu li a');
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      });
    });

    // toggle menu/navbar script
    document.querySelector('.menu-btn').addEventListener("click", function () {
      document.querySelector('.navbar .menu').classList.toggle("active");
      document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // typing animation script
    var typed1 = new Typed(".typing", {
      strings: ["Freelancer", "Web Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    var typed2 = new Typed(".typing-2", {
      strings: ["Freelancer", "Web Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // owl carousel script
    var carousel = document.querySelector('.carousel');
    if (carousel) {
      $(carousel).owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }
      });
    }
  });
