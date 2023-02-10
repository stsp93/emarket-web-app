import { html } from "../lib.js";
import { accrodionAnimation, clickPrev, clickNext } from "../controllers/accordionController.js";
import { getAllCategories } from "../api/data.js";

const homeTemplate = (allCategories) => html`<h2 class="main-title">Categories</h2>
<article class="accordion">
  <a class="accordion__link accordion__link-active" href="/">
    <img @load=${animateAccordion} class="accordion__img" src="/static/images/open.jpg" alt="e-market" />
  </a>
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
  <a href="/category/${category}"><img class="skeleton" @load=${function(e) {e.target.classList.remove('skeleton')}} src="${imgUrl}" alt="" />
    <p>${category}</p>
  </a>
</li>`

// accordion link template
const accordionLink = (category, imgUrl) => html`<a class="accordion__link" href="/category/${category}">
  <img class="accordion__img" src="${imgUrl}" alt="${category}" />
</a>`


export async function showHome(ctx, next) {
  // render homepage with all categories
  const allCategories = Object.entries(await getAllCategories());
  ctx.render(homeTemplate(allCategories));

}

function animateAccordion() {
  // Start accordion animation on image
  const accordionLinks = Array.from(document.querySelectorAll('.accordion__link'));
  accrodionAnimation(accordionLinks);
}


