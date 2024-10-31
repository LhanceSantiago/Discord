const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
  if (window.innerWidth < 760) {
    console.log(scrollY);
    if ((scrollY) >= 100 ) {
      header.classList.add("bg");
    } else {
      header.classList.remove("bg");
    }
  }
}); 
