// * hero
import { createElement } from "../createElement";
import { heroTitles } from "../navigation";


export const renderHero = gender => {
  if (!gender) {
    console.log('empty gender hero')
    return;
  }

  const hero = document.querySelector ('.hero');
  const heroContainer = document.querySelector('.hero__container');
  heroContainer.innerHTML = '';
  // initial value women
  // hero.classList.remove('hero_women');
  // hero.classList.remove('hero_men');
  hero.classList.remove('hero_women', 'hero_men');
  hero.classList.add('hero_' + gender);
  console.log ('render hero for:', gender, hero);
  
  const content = createElement('',
    {
      className: 'hero__content',
    },
    {
      parent: heroContainer,
      appends: [
        createElement('h2',
          {
            className: 'hero__title',
          },
          {
            text: heroTitles[gender],
          }
        ),
        createElement('a',
          {
            className: 'hero__link',
            href: '#' + gender, // todo
            title: 'Перейти по ссылке на страницу ' + heroTitles[gender], 
          },
          {
            text: 'Перейти',
          }
        )
      ],
    }
  );

};
