// * NAVIGATION top nav

import { createElement } from "../createElement";
import { dataNavigation } from "../navigation";

export const renderNav = (gender) => {

  const nav = document.querySelector('.navigation');
  nav.innerHTML = ''; // todo

  const navigationGender = createElement('ul',
    {
      className: 'navigation__gender gender',
    },
    {
      appends: [...Object.keys(dataNavigation).map(key => {
          console.log(key)
          return createElement('a',
            {
              href: '#' + key,
              className: `gender__link ${(key === gender) ? 'gender__link_active' : ''}`,
              textContent: dataNavigation[key].title,
            },
            {
              callback: (element) => {
                element.dataset.gender = key;
              },
            }
          )
        }).map(elem => createElement('li',
          {
            className: 'gender__item',
          },
          {
            append: elem,
          }
        ))
      ],
    }
  );


  const container = createElement('',
    {
      className: 'container navigation__container',
    },
    {
      parent: nav,
      // append: navigationGender,
      appends: [navigationGender, ],
    }
  );



  // console.log('render nav for', gender, nav);

  /*
  <div class="container navigation__container">

    <ul class="navigation__gender gender">
      <li class="gender__item">
        <a href="#women" class="${(gender === 'women') ? 'gender__link gender__link_active' : 'gender__link'}" data-gender="women">Женщины</a>
      </li>
      <li class="gender__item">
        <a href="#men" class="gender__link${(gender === 'men') ? ' gender__link_active' : ''}" data-gender="men">Мужчины</a>
      </li>
    </ul>

    <ul class="navigation__category category">
      <li class="category__item">
        <a href="#" class="category__link" data-slug="jackets">куртки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="jeens">джинсы</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="pants">брюки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link category__link_active" data-slug="shirts">рубашки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="hoodie">толстовки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link" data-slug="t-shirts">футболки</a>
      </li>
    </ul>
  </div>
  */
};
