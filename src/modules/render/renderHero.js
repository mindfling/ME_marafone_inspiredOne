// * hero
import { createElement } from "../createElement";


export const renderHero = gender => {
  const hero = document.querySelector ('.hero');
  hero.innerHTML = ''; // todo

  // * initial value women
  hero.classList.remove('hero_women'); // todo
  hero.classList.remove('hero_men'); // todo
  hero.classList.add('hero_' + gender);
  console.log ('render hero for:', gender, hero);
  
  const content = createElement('',
    {
      className: 'hero__content',
    },
    {
      appends: [
        createElement('h2',
          {
            className: 'hero__title',
          },
          {
            text: 'Новая коллекция Зимней одежды',
          }
        ),
        createElement('a',
          {
            className: 'hero__link',
            href: '#women', // todo
            title: 'перейти по временной ссылке', 
          },
          {
            text: 'Перейти',
          }
        )
      ],
    }
  );

  createElement('',
    { className: 'container hero__container' },
    { 
      append: content,
      parent: hero,
    }
  );

};
