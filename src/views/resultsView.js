import { getCategoryResults } from "../api/data.js";
import { html } from "../lib.js";

const resultsTemplate = () => html`<h2 class="main-title">Offers</h2>
<ul class="offers-list">
  <li>
    <article class="offer-card">
      <a href="" class="offer-link"><img class="offer-img" src="/static/images/clothing.jpg" alt="" /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href="">Brand new Nice Thingy that's red</a>
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
      </div>
    </article>
  </li>

  <li>
    <article class="offer-card">
      <a href="" class="offer-link"><img class="offer-img" src="/static/images/clothing.jpg" alt="" /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href="">Brand new Nice Thingy that's red</a>
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
      </div>
    </article>
  </li>

  <li>
    <article class="offer-card">
      <a href="" class="offer-link"><img class="offer-img" src="/static/images/clothing.jpg" alt="" /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href="">Brand new Nice Thingy that's red</a>
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
      </div>
    </article>
  </li>

  <li>
    <article class="offer-card">
      <a href="" class="offer-link"><img class="offer-img" src="/static/images/clothings.jpg" alt="" /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href="">Brand new Nice Thingy that's red</a>
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
      </div>
    </article>
  </li>
</ul>

<div class="pagination">
  <button class="pagination-arrow"><i class="fa-solid fa-chevron-left"></i></button>
  <p class="page">1/2</p>
  <button class="pagination-arrow"><i class="fa-solid fa-chevron-right"></i></button>
</div>
<!--  if 0 offers  -->
<!-- <p>No offers found...</p> -->`

export function showResults(ctx, next) {
  console.log('query ' + ctx.params.query);
  ctx.render(resultsTemplate());
}

export async function showCategory(ctx, next) {
  console.log('category ' + ctx.params.category);
  const results = await getCategoryResults(ctx.params.category);
  console.log(results);
  ctx.render(resultsTemplate());
}