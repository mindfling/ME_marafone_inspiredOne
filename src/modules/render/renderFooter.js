// * Footer

export const renderFooter = () => {

  const footer = document.querySelector('.footer');

  footer.innerHTML = `
<div class="container footer__container">
  <div class="footer__item footer__item_category footer-category">
    <h2 class="footer__title footer-category__title">Каталог</h2>
    <ul class="footer-category__list">
      <li class="footer-category__item">
        <h3 class="footer-category__subtitle">
          <a href="#" class="footer__link">Женский</a>
        </h3>
        <ul class="footer-category__sublist">
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Бюстгальтеры</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Трусы</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Носки</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Халаты</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Термобелье</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Пижамы</a>
          </li>
        </ul>
      </li>
      <li class="footer-category__item">
        <h3 class="footer-category__subtitle">
          <a href="#" class="footer__link">Мужчины</a>
        </h3>
        <ul class="footer-category__sublist">
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Трусы</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Носки</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Халаты</a>
          </li>
          <li class="footer-category__subitem">
            <a href="#" class="footer__link">Термобелье</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="footer__item footer__item_social footer-social">
    <h2 class="footer__title footer-social__title">Связаться с нами</h2>
    <p class="footer-social__subtitle">Контакты и адреса магазинов</p>
    <ul class="footer-social__list">
      <li class="footer-social__item">
        <a href="#" class="footer-social__link footer-social__link_fb">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 15.1826 22.7357 18.2349 20.4853 20.4853C18.2349 22.7357 15.1826 24 12 24C8.8174 24 5.76517 22.7357 3.51472 20.4853C1.26428 18.2349 0 15.1826 0 12C0 8.81741 1.26428 5.76514 3.51472 3.51472C5.76517 1.26428 8.8174 0 12 0C15.1826 0 18.2349 1.26428 20.4853 3.51472C22.7357 5.76514 24 8.81741 24 12ZM12.4305 8.85902C11.2635 9.34502 8.92948 10.35 5.43148 11.874C4.8645 12.099 4.566 12.321 4.539 12.537C4.494 12.9015 4.95148 13.0455 5.57399 13.242L5.8365 13.3245C6.4485 13.524 7.27348 13.7565 7.70101 13.7655C8.09101 13.7745 8.5245 13.6155 9.00301 13.2855C12.2715 11.079 13.959 9.96451 14.064 9.94051C14.139 9.92251 14.244 9.90149 14.313 9.96451C14.3835 10.026 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.593 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.6215 17.2065 13.7565 17.304 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.16149C17.573 8.00376 17.5665 7.84531 17.5425 7.68898C17.5284 7.56288 17.4673 7.44667 17.3715 7.36349C17.235 7.26926 17.0723 7.2205 16.9065 7.224C16.4565 7.23149 15.762 7.47302 12.4305 8.85902Z" />
          </svg>
        </a>
      </li>
      <li class="footer-social__item">
        <a href="#" class="footer-social__link footer-social__link_vk">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z" />
          </svg>                
        </a>
      </li>
      <li class="footer-social__item">
        <a href="#" class="footer-social__link footer-social__link_fb">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z" />
          </svg>                
        </a>
      </li>
    </ul>
  </div>
  <div class="footer__item footer__item_contacts footer-contacts">
    <div class="footer-contacts__email">
      <a href="mailto:Inspired@gmail.com" class="footer-contacts__link footer__link">Inspired@gmail.com</a>
    </div>
    <div class="footer-contacts__phone">
      <a href="tel:89304902620" class="footer-contacts__link footer__link">8 930 490 26 20</a>
    </div>
  </div>
  <div class="footer__item footer__item_copyright footer-copyright">
    <p class="footer-copyright__text">&copy;&nbsp;INSPIRED,&nbsp;2023</p>
  </div>
  <ul class="footer__item footer__item_development footer-development">
    <li class="footer-development__item">
      <p title="UX/UI designer">Designer: <a href="@Mrshmallowww" class="footer__link">Anastasia Ilina</a></p>
    </li>
    <li class="footer-development__item">
      <p>Developer: <a href="@MindFling" class="footer__link">Me Mindfling</a></p>
    </li>
  </ul>
</div>`;  

};
