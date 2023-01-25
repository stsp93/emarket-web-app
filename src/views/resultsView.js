import { getCategoryResults } from "../api/data.js";
import { html } from "../lib.js";

const resultsTemplate = (results) => html`<h2 class="main-title">Offers</h2>

${results.length > 0 ? html`<ul class="offers-list">${results.map(item => itemCard(item))}</ul>` : html`<p
  class="offer-empty">Nothing found...</p>`}


<div class="pagination">
  <button class="pagination-arrow"><i class="fa-solid fa-chevron-left"></i></button>
  <p class="page">1/2</p>
  <button class="pagination-arrow"><i class="fa-solid fa-chevron-right"></i></button>
</div>`

// item card template
const itemCard = (item) => html`<li>
  <article class="offer-card">
    <a href="/details/${item._id}" class="offer-link"><img class="offer-img" src="${item.imageUrl}" alt="" /></a>

    <div class="offer-text">
      <a class="offer-title offer-link" href="">${item.title}</a>
      <p class="location">${item.location}</p>
      <p class="location">${item.createdOn.slice(0,10)}</p>
      <p class="price"><strong>${item.price}</strong> $</p>
    </div>
  </article>
</li>`


export function showResults(ctx, next) {
  console.log('query ' + ctx.params.query);
  ctx.render(resultsTemplate());
}

export async function showCategory(ctx, next) {
  console.log('category ' + ctx.params.category);
  const results = await getCategoryResults(ctx.params.category);
  console.log(results);
  ctx.render(resultsTemplate(results));
}