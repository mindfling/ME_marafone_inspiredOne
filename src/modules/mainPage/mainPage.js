// * Main Page
import {renderHero} from '../render/renderHero';
import {renderNav} from '../render/renderNav';
import {renderProducts} from '../render/renderProducts';


export const mainPage = (gender) => {
  // console.log('main page', gender)

  renderNav(gender);
  renderHero(gender);
  renderProducts(gender, 'Наши Новинки');
};
