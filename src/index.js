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


  
  genderLinks.forEach(link => {
    link.addEventListener('click', e => {
      genderLinks.forEach(elem => {
        if (elem === e.target) {
          elem.classList.add('gender__link_active');
        } else {
          elem.classList.remove('gender__link_active');
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
