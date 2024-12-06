const dropdown = document.querySelector('.questDropdown');
const dropdownLinks = document.querySelector('.quests__dropdown');
dropdown.addEventListener("click", () => {
    dropdownLinks.classList.toggle("open");
});