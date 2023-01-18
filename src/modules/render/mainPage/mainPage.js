// * Main Page

import { renderNav } from "./renderNav";
import { renderHero } from "./renderHero";
import { renderProducts } from "./renderProducts";


export const mainPage = () => {
  console.log('main page')

  renderNav();
  renderHero();
  renderProducts();
}

