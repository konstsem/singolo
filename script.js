const resetSelected = (el, selected) => el.forEach((item) => item.classList.remove(selected));

// Navigation
const navItems = document.querySelectorAll('.navigation__item');
navItems.forEach((item) => {
  item.firstChild.addEventListener('click', () => {
    resetSelected(navItems, 'selected');
    item.classList.add('selected');
  });
});

// Images Gallery
const moveImages = () => {
  const images= document.querySelector('.images__wrapper');
  images.prepend(images.lastElementChild);
};

// Image Tags
const tags = document.querySelectorAll('.tag');
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    resetSelected(tags, 'tag_selected');
    tag.classList.add('tag_selected');
    moveImages();
  });
});

// Images moving
const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    resetSelected(images, 'selected');
    image.classList.add('selected');
  })
})


// Slider
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

// Iphones activation
const iphoneButtons = document.querySelectorAll('.iphone-button');
iphoneButtons.forEach((button) => button.addEventListener('click', () => {
  const orientation = button.dataset.orientation;
  const currentScreen = document.querySelector(`.iphone-screen[data-orientation=${orientation}]`);
  currentScreen.style.display = currentScreen.style.display === 'block' ? 'none' : 'block';
}));

// Form submit
const form = document.querySelector('form');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.modal-window__button_close');
closeButton.addEventListener('click', () => modalWindow.classList.remove('modal-window_shown'));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target: { subject, details } } = event;
  document.querySelector('.modal-window__field_subject').innerText = subject.value ? `Тема: ${subject.value}`: 'Без темы';
  document.querySelector('.modal-window__field_details').innerText = details.value ? `Описание: ${details.value}` : 'Без описания';
  modalWindow.classList.add('modal-window_shown');
});
