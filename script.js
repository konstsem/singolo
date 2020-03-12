const resetSelected = (el, selected) => el.forEach((item) => item.classList.remove(selected));

const navItems = document.querySelectorAll('.navigation__item');
navItems.forEach((item) => {
  item.firstChild.addEventListener('click', () => {
    resetSelected(navItems, 'selected');
    item.classList.add('selected');
  });
});

const tags = document.querySelectorAll('.tag');
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    resetSelected(tags, 'tag_selected');
    tag.classList.add('tag_selected');
  });
});
