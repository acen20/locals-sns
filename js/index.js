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

let expand_btns = document.querySelectorAll(".expand");
expand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("rotate-180-X");
  });
});
