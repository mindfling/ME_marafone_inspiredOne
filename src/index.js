import './index.html';
import './index.scss';

import { router } from './modules/router/router';

import { renderHeader } from './modules/render/renderHeader';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';


router.on('*', () => {
  console.warn('alll ', 1010)
  console.log('* begin all pages at * render deft header footer')
  renderHeader();
  renderFooter();
  console.log('*  ends all pages at * render deft header footer')
});

router.on('/', () => {
  console.warn('root ', 1111)
  console.log('/ beg root page')
  // mainPage('women');
  womenMainPage();
  console.log('/ end root page')
});

router.on('women', () => {
  console.log('women')
  womenMainPage();
});

router.on('men', () => {
  console.log('men')
  menMainPage();
});


router.on('cart', () => {
  console.log('go to cart goods')
});

router.on('fav', () => {
  console.log('go to favorite goods')
});


router.resolve();


// * init() initial mainPage stay
// renderHeader();
// mainPage();
// renderFooter();

// * обработка кнопки добавить в избранное

/*
document.addEventListener ('DOMContentLoaded', event => {
  const btnFavList = document.querySelectorAll('.product__btn-favorite');
  const goods = document.querySelector('.goods');

  const genderLinks = document.querySelectorAll('.gender__link');
  const categoryLinks = document.querySelectorAll('.category__link');

  const genders = ['women', 'men'];
  const genderHeroTitles = {
    women: 'Новая коллекция зимней женской одежды',
    men: 'Новая коллекция зимней одежды для мужчин',
  };

// * simple click on gender
genderLinks.forEach(link => {
  link.addEventListener('click', e => {
    const links = document.querySelectorAll('.gender__link');
    const hero = document.querySelector('.hero');
    const heroTitle = hero.querySelector('.hero__title');

    links.forEach((elem, index) => {
      if (elem === e.target) {
        elem.classList.add('gender__link_active');
        const heroClass = genders[index];
        hero.classList.add('hero_' + heroClass);
        heroTitle.textContent = genderHeroTitles[heroClass];
        console.log(elem.dataset.gender);
      } else {
        const heroClass = genders[index];
        // ? только для 2х элеменов
        elem.classList.remove('gender__link_active');
        hero.classList.remove('hero_' + heroClass);
      }
    });
  });
});

// * simple click on category
categoryLinks.forEach(link => {
  link.addEventListener('click', event => {
    const links = document.querySelectorAll('.category__link');
    const target = event.target;
    links.forEach(elem => {
      if (elem === target) {
        console.log(elem.dataset.slug);
      } else {
        elem.classList.remove('category__link_active');
      }
    });
  });
});

// * click по цвету товара
goods.addEventListener('click', e => {
  if (e.target.classList.contains('color')) {
    console.log('color');
    e.target.classList.toggle('color_check');
  }
});

// * click по сердечку ♡
btnFavList.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(e.target);
    btn.classList.toggle('product__btn-favorite_active');
  });
});
});
*/