import './index.html';
import './index.scss';

console.log('Hi')

// * обработка кнопки добавить в избранное
const btnFavList = document.querySelectorAll('.product__btn-favorite');

document.addEventListener('DOMContentLoaded', event => {

  btnFavList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      btn.classList.toggle('product__btn-favorite_active');
    })
  });

});
