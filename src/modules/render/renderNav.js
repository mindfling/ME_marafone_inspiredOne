/* eslint-disable max-len */
// * NAVIGATION top nav

import {createElement} from '../createElement';
import {dataNavigation} from '../navigation';

export const renderNav = (gender) => {
  if (!gender) {
    console.log('empty gender nav');
    return;
  }

  const nav = document.querySelector('.navigation');
  // nav.innerHTML = '';
  const container = document.querySelector('.navigation__container');

  // todo initial clear
  while (container.lastChild) {
    container.lastChild.remove();
  }

  const navigationGender = createElement('ul',
    {
      className: 'navigation__gender gender',
    },
    {
      parent: container,
      appends: [...Object.keys(dataNavigation).map(key => createElement('a',
        {
          href: '#/' + key,
          className: `gender__link ${(key === gender) ? 'gender__link_active' : ''}`,
          title: `Перейти к одежде для ${dataNavigation[key].title}`,
          textContent: dataNavigation[key].title,
        },
        {
          callback: (element) => {
            element.dataset.gender = key;
          },
        },
      )).map(elem => createElement('li',
        {className: 'gender__item'},
        {append: elem},
      )),
      ],
    },
  );

  const navigationCategory = createElement('ul',
    {
      className: 'category navigation__category',
    },
    {
      parent: container,
      appends: dataNavigation[gender].list.map(item => createElement('li',
        {
          className: 'category__item',
        },
        {
          append: createElement('a',
            {
              className: 'category__link',
              href: `#/${dataNavigation[gender].slug}/${item.slug}`,
              title: `Перейти в категорию ${item.title} одежда для ${dataNavigation[gender].title} `,
            },
            {
              text: item.title,
              callback: elem => {
                elem.dataset.slug = item.slug;
              },
            },
          ),
        },
      )),
    },
  );
};
