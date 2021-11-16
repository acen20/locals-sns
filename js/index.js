let links = document.querySelectorAll(".nav-item");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    let element = e.currentTarget;
    links.forEach((link) => {
      link.classList.remove("active");
    });
    element.classList.add("active");
  });
});
