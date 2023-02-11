import { html } from "../lib.js";
import { accrodionAnimation, clickPrev, clickNext } from "../controllers/accordionController.js";
import { getAllCategories } from "../api/data.js";
import { removeSkeleton } from "../utils/skeletonUtil.js";

const homeTemplate = (allCategories) => html`<h2 class="main-title">Categories</h2>
<article class="accordion">
  
  ${allCategories.map(([category, imgUrl]) => accordionLink(category, imgUrl))}
  <button @click=${clickPrev} class="accordion__prev accordion__button">
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <button @click=${clickNext} class="accordion__next accordion__button">
    <i class="fa-solid fa-chevron-right"></i>
  </button>

</article>
<ul class="categories-list">
  ${allCategories.map(([category, imgUrl]) => categoryLi(category, imgUrl))}
`
// category template
const categoryLi = (category, imgUrl) => html`<li class="category">
  <a href="/category/${category}"><img class="skeleton" @load=${removeSkeleton} src="${imgUrl}" alt="" />
    <p>${category}</p>
  </a>
</li>`

// accordion link template
const accordionLink = (category, imgUrl) => html`<a class="accordion__link" href="/category/${category}"><div class="accordion__sign">Shop now in ${category}</div>
  <img class="accordion__img skeleton" @load=${removeSkeleton}} src="${imgUrl}" alt="${category}" />
</a>`


export async function showHome(ctx, next) {
  // render homepage with all categories
  const allCategories = Object.entries(await getAllCategories());
  ctx.render(homeTemplate(allCategories));
  animateAccordion();
}

function animateAccordion() {
  // Start accordion animation on image
  const accordionLinks = Array.from(document.querySelectorAll('.accordion__link'));
  accrodionAnimation(accordionLinks);
}



