const navItems = document.querySelectorAll('.navigation__item');
const resetSelected = () => navItems.forEach((item) => item.classList.remove('selected'));
navItems.forEach((item) => {
  item.firstChild.addEventListener('click', () => {
    resetSelected();
    item.classList.add('selected');
  });
});
