import './index.html';
import './index.scss';

import { mainPage } from './modules/render/mainPage/mainPage';
import { renderHeader } from './modules/render/renderHeader';


// renderHeader();
// mainPage();
// renderFooter();


// * обработка кнопки добавить в избранное

document.addEventListener('DOMContentLoaded', event => {
  
  const btnFavList = document.querySelectorAll('.product__btn-favorite');
  const goods = document.querySelector('.goods');
  
  const genderLinks = document.querySelectorAll('.gender__link');
  const categoryLinks = document.querySelectorAll('.category__link');
  const hero = document.querySelector('.hero');
  const heroTitle = hero.querySelector('.hero__title');
  
  const genders = ['women', 'men'];
  const genderHeroTitles = {
    'women': 'Новая коллекция зимней женской одежды',
    'men': 'Новая коллекция зимней одежды для мужчин',
  }
  
  genderLinks.forEach(link => {
    link.addEventListener('click', e => {

      genderLinks.forEach((elem, index) => {
        if (elem === e.target) {
          elem.classList.add('gender__link_active');
          const heroClass = genders[index];
          hero.classList.add('hero_' + heroClass);
          heroTitle.textContent = genderHeroTitles[heroClass];
        } else {
          const heroClass = genders[index];
          // ? только для 2х элеменов
          elem.classList.remove('gender__link_active');
          hero.classList.remove('hero_' + genders[index]);
        };
      });
    });
  });


  categoryLinks.forEach(link => {
    link.addEventListener('click', event => {
      const target = event.target;
      categoryLinks.forEach(elem => {
        if (elem === target) {
          elem.classList.add('category__link_active');
        } else {
          elem.classList.remove('category__link_active');
        }
      })
    })
  })


  // * click по цвету товара
  goods.addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
      console.log('color')
      e.target.classList.toggle('color_check');
    }
  });

  // * click по сердечку
  btnFavList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      btn.classList.toggle('product__btn-favorite_active');
    })
  });

});
