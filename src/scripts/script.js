'use strict';

const toggleButton = document.querySelector('.header__toggle-menu');
const pageElement = document.querySelector('.page');
const navigationElement = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation__link');

function toggleMobileMenu() {
  toggleButton.classList.toggle('header__toggle-menu--open');
  navigationElement.classList.toggle('navigation--open');
  pageElement.classList.toggle('page--no-overflow');
}

function highlightLink() {
  const navigationCoords = navigationElement.getBoundingClientRect();
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    left: linkCoords.left - navigationCoords.left,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = '4px';
  highlight.style.transform = `translateX(${coords.left}px)`;
}

function removeHighlight() {
  highlight.style.height = '0px';
}

const highlight = document.createElement('div');
highlight.classList.add('navigation__highlight');
navigationElement.append(highlight);

toggleButton.addEventListener('click', toggleMobileMenu);

navigationLinks.forEach(link =>
  link.addEventListener('mouseenter', highlightLink)
);
navigationLinks.forEach(link => link.addEventListener('focus', highlightLink));
navigationLinks.forEach(link =>
  link.addEventListener('mouseout', removeHighlight)
);
navigationLinks.forEach(link => link.addEventListener('blur', removeHighlight));
