/* eslint-disable max-len */
// * render goods products section
import {createElement} from '../createElement';
import {getData} from '../getData';

import {API_URL, DATA, ruSymbol} from '../const';


export const renderProducts = async (gender, title) => {
  console.log(DATA.colors);
  console.log('gender, title: ', gender, title);

  const data = await getData(`${API_URL}/api/goods?gender=${gender}`);
  console.log('products data: ', data);

  const products = document.querySelector('.goods');
  products.innerHTML = '';

  const goodsTitle = createElement('h2',
    {
      className: 'goods__title',
      textContent: title,
    },
  );

  const container = createElement('',
    {
      className: 'container goods__container',
    },
    {
      parent: products,
      append: goodsTitle,
    },
  );

  const goodsList = createElement('ul',
    {
      className: 'goods__list',
    },
    {
      parent: container,
      appends: [
        ...data.map((product) => {
          console.log(product.id, product.title, product.price, product.colors, product);
          return createElement(
            'li',
            {
              className: 'goods__item',
            },
            {
              append: createElement('article',
                {
                  className: 'product goods__product',
                  // title: `${product.title} ${product.id}`,
                  innerHTML: `
                    <a href="#" class="product__link">
                      <img class="product__image"
                        src="${API_URL}/img/${product.id}.jpg"
                        alt="Товар ${product.title} артикул ${product.id}">
                      <h3 class="product__title" title="${product.title} ${product.id}">${product.title}</h3>
                    </a>
                    <div class="product__row">
                      <p class="product__price">${product.price} ${ruSymbol}</p>
                      <button class="product__btn-favorite" aria-label="добавить в избраное title="Добавить в избранное"></button>
                    </div>
                  `,
                },
                {
                  append: createElement('ul',
                    {
                      className: 'product__color-list',
                    },
                    {
                      appends: product.colors.map((color, index) => createElement(
                        'li',
                        {
                          className: 'product__color-item',
                        },
                        {
                          append: createElement('',
                            {
                              className: `color color_${DATA.colors[color].title} ${index !== 0 ? '' : 'color_check'}`,
                              title: 'Цвет ' + DATA.colors[color].title,
                            },
                          ),
                        },
                      )),
                    },
                  ),
                },
              ),
            },
          );
        }),
      ],
    },
  );

  /*
  products.innerHTML = `


    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
          <img class="product__image" src="${product1}" alt="product 01">
          <h3 class="product__title">Рубашка женская Winter Spring из Натурального Хлопка</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product11}" alt="product 01">
          <h3 class="product__title">Рубашка женская белая Natural Cotton</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white color_check"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product4}" alt="product 01">
          <h3 class="product__title">Рубашка женская белая Dien</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299&nbsp;&#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>

          <li class="product__color-item">
            <div class="color color_orange"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_beige color_check"></div>
          </li>
        </ul>
      </article>
    </li>


    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product5}" alt="product 01">
          <h3 class="product__title">Рубашка женская белая Dien</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299&nbsp;&#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white color_check"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product15}" alt="product 01">
          <h3 class="product__title">Рубашка женская Natural Cotton Free</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product6}" alt="product 01">
          <h3 class="product__title">Куртка женская длинная Paris зимняя</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_green color_check"></div>
          </li>
        </ul>
      </article>
    </li>
    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product7}" alt="product 01">
          <h3 class="product__title">Курстка женская зимняя Bien из Микрофибры длинная</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_blue color_check"></div>
          </li>
        </ul>
      </article>
    </li>

    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product3}" alt="product 01">
          <h3 class="product__title">Рубашка женская Natural Cotton Free</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>


    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product2}" alt="product 11">
          <h3 class="product__title">Куртка женская Winter Spring из Натурального Хлопка</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>

    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product8}" alt="product 11">
          <h3 class="product__title">Желетка женская синяя Prague Full удлиненная</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
        </ul>
      </article>
    </li>

    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product11}" alt="product 1">
          <h3 class="product__title">Рубашка женская белая Cotton</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black color_check"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white color_check"></div>
          </li>
        </ul>
      </article>
    </li>

    <li class="goods__item">
      <article class="product goods__product">
        <a href="#" class="product__link">
        <img class="product__image" src="${product14}" alt="product 14">
          <h3 class="product__title">Желетка женская синяя Prague Full удлиненная</h3>
        </a>
        <div class="product__row">
          <p class="product__price">1299 &#8381;</p>
          <button class="product__btn-favorite" aria-label="добавить в избраное"></button>
        </div>
        <ul class="product__color-list">
          <li class="product__color-item">
            <div class="color color_red"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_black"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_white"></div>
          </li>
          <li class="product__color-item">
            <div class="color color_blue color_check"></div>
          </li>
        </ul>
      </article>
    </li>
  `;*/
};
