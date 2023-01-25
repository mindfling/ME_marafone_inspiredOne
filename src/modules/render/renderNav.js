// * NAVIGATION top nav

import { createElement } from "../createElement";
import { dataNavigation } from "../navigation";

export const renderNav = (gender) => {
  if (!gender) {
    console.log('empty gender nav')
    return;
  }

  const nav = document.querySelector('.navigation');
  // nav.innerHTML = '';
  // todo initial clear 
  while (nav.lastChild) {
    nav.lastChild.remove();
  }

  const navigationGender = createElement('ul',
    {
      className: 'navigation__gender gender',
    },
    {
      appends: [...Object.keys(dataNavigation).map(key => {
          // console.log(key)
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
          );
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

  const navigationCategory = createElement('ul',
    {
      className: 'navigation__category category',
    },
    {
      appends: dataNavigation[gender].list.map(item => createElement('li',
        {
          className: 'category__item',
          // textContent: item.title,
        },
        {
          append: createElement('a',
            {
              className: 'category__link',
            },
            {
              text: item.title,
              callback: elem => {
                elem.dataset.slug = item.slug;
              },
            }
          ),
        }
      ))
    }
  );


  const container = createElement('',
    {
      className: 'container navigation__container',
    },
    {
      parent: nav,
      appends: [
        navigationGender,
        navigationCategory
      ],
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
