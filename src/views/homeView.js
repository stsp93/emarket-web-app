import { html } from "../lib.js";
import { accrodionAnimation, clickPrev, clickNext } from "../controllers/accordionController.js";

const homeTemplate = () => html`<h2 class="main-title">Categories</h2>
<article  class="accordion">
  <a class="accordion__link accordion__link-active" href="/electronics">
    <img class="accordion__img" src="/static/images/electronics.jpg" alt="" />
  </a>
  <a class="accordion__link" href="/clothings">
    <img class="accordion__img" src="/static/images/clothings.jpg" alt="" />
  </a>
  <a class="accordion__link" href="/">
    <img class="accordion__img" src="/static/images/asd.jpg" alt="" />
  </a>

  <button @click=${clickPrev} class="accordion__prev accordion__button">
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <button @click=${clickNext} class="accordion__next accordion__button">
    <i class="fa-solid fa-chevron-right"></i>
  </button>

</article>
<ul class="categories-list">
  <li class="category">
    <a href="/clothings"><img src="/static/images/clothings.jpg" alt="" />
      <p>Clothing</p>
    </a>
  </li>
  <li class="category">
    <a href="/electronics"><img src="/static/images/electronics.jpg" alt="" />
      <p>Electronics</p>
    </a>
  </li>
  <li class="category">
    <a href=""><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p>
    </a>
  </li>
  <li class="category">
    <a href=""><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p>
    </a>
  </li>
  <li class="category">
    <a href=""><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p>
    </a>
  </li>
  <li class="category">
    <a href=""><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p>
    </a>
  </li>
</ul>
`


export function showHome(ctx, next) {
  ctx.render(homeTemplate());
  
  // Start accordion animation 
  const accordionLinks = Array.from(document.querySelectorAll('.accordion__link'));
  accrodionAnimation(accordionLinks);
}


