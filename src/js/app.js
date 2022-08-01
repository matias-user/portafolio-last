import insertItemsCarousel from './carousel.js';
import detectScroll from './detectecScroll.js';
import getImages from './gallery.js';
import listenNav from './listenNav.js';

document.addEventListener( 'DOMContentLoaded', () => {
    insertItemsCarousel();
    getImages();
    listenNav();
    detectScroll();
});

