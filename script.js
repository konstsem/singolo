const resetSelected = (el, selected) => el.forEach((item) => item.classList.remove(selected));

const navItems = document.querySelectorAll('.navigation__item');
navItems.forEach((item) => {
  item.firstChild.addEventListener('click', () => {
    resetSelected(navItems, 'selected');
    item.classList.add('selected');
  });
});

const moveImages = () => {
  const images= document.querySelector('.images__wrapper');
  images.prepend(images.lastElementChild);
};

const tags = document.querySelectorAll('.tag');
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    resetSelected(tags, 'tag_selected');
    tag.classList.add('tag_selected');
    moveImages();
  });
});

const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    resetSelected(images, 'selected');
    image.classList.add('selected');
  })
})

let slides = document.querySelectorAll('.slider__slide');
let currentItem = 0;
let isEnabled = true;

const changeCurrentItem = (n) => {
  currentItem = (n + slides.length) % slides.length;
}

function hideItem(direction) {
  isEnabled = false;
  slides[currentItem].classList.add(direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  slides[currentItem].classList.add('next', direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.control_left').addEventListener('click', function() {
  if(isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.control_right').addEventListener('click', function() {
  if(isEnabled) {
    nextItem(currentItem);
  }
});
