const dropdown = document.querySelector('.questDropdown');
const dropdownLinks = document.querySelector('.quests__dropdown');
const subnav = document.querySelector('.subnav');

dropdown.addEventListener("click", () => {
    dropdownLinks.classList.toggle("open");
});

window.addEventListener("scroll", () =>   {
    console.log(scrollY);
    if ((scrollY) >= 1 ) {
     subnav.classList.add("fixed");
    } else {
     subnav.classList.remove("fixed");
    }
  });