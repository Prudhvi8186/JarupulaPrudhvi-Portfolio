/* menu bar */

let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".nav-list");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav ul li a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'Web Designer', 'Python Developer', 'Data Analyst'],
    typeSpeed: 90,
    loop: true,
});



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*right click */

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

ScrollReveal({
  distance: "120px",
  duration: 2000,
  delay: 160,
});

ScrollReveal().reveal(".home-container h1, section .headings .headings-para", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-container .social-media-profiles a, .skills p, .social-media-icons a, .intro-img, .card-container, .social-media-icons img, .certificate-card, .certifi-2",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-container .button-1, .box, .profile-wrapper, .about-image, .form-content h1, .form-content p, .education, .certifi-1",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".home-container p, .intro, .home-container .button-2, section .headings .section-heading, .about-content, .form-content-container form, .certifi-3",
  {
    origin: "right",
  }
);
