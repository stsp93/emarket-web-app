import { getCategoryResults, searchItems } from "../api/data.js";
import { html } from "../lib.js";

const resultsTemplate = (results, title) => html`<h2 class="main-title">${title}</h2>

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
    <a href="/offers/${item._id}" class="offer-link"><img class="offer-img" src="${item.imageUrl}"
        alt="${item.title}" /></a>

    <div class="offer-text">
      <a class="offer-title offer-link" href="/offers/${item._id}">${item.title}</a>
      <p class="location">${item.location}</p>
      <p class="location">${item.createdOn.slice(0, 10)}</p>
      <p class="price"><strong>${item.price}</strong> $</p>
    </div>
  </article>
</li>`


export async function showResults(ctx, next) {
  const query= ctx.query
  console.log(query);
  const results =  await searchItems(query);
  const title = `${results.length} result${results.length === 1 ? '': 's'} found`;



  ctx.render(resultsTemplate(results, title));
  if(query) document.getElementsByClassName('search-box').value = query
}

export async function showCategory(ctx, next) {
  const category = ctx.params.category
  try {
    const results = await getCategoryResults(category);
    ctx.render(resultsTemplate(results, category));
  } catch (error) {
    console.log(error);
    ctx.page.redirect('/404')
  }

}