import { getCategoryResults, searchItems } from "../api/data.js";
import { html } from "../lib.js";
import { getState, setState } from "../state.js";
import { changePage, paginate } from "../utils/paginationUtil.js";

const resultsTemplate = (resultsData , title) => html`<h2 class="main-title">${title}</h2>

${resultsData.results.length > 0 ? html`<ul class="offers-list">${resultsData.results.map(item => itemCard(item))}</ul>`
: html`<p class="offer-empty">Nothing found...</p>`}


<div class="pagination">
  <button @click=${changePage.bind(null, resultsData.page - 1, renderTemplate)} class="pagination-arrow"><i
      class="fa-solid fa-chevron-left"></i></button>
  <p class="page">${resultsData.page}/${resultsData.pages || 1}</p>
  <button @click=${changePage.bind(null, resultsData.page + 1, renderTemplate)} class="pagination-arrow"><i
      class="fa-solid fa-chevron-right"></i></button>
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


let context;

export async function showResults(ctx, next) {
  context = ctx;
  const query = ctx.query
  const allResults = await searchItems(query);
  setState('results', allResults)
  const title = `${getState('results').length} result${getState('results').length === 1 ? '' : 's'} found`;
  setState('title', title) 

  const resultsData = paginate(getState('page'));

  renderTemplate(resultsData);
  if (query) document.getElementsByClassName('search-box').value = query
}

export async function showCategory(ctx, next) {
    context = ctx;
  const category = ctx.params.category
  setState('title', category)
  try {
    const allResults = await getCategoryResults(category);
    setState('results', allResults)
    const resultsData = paginate(getState('page'));
    renderTemplate(resultsData, category);
  } catch (error) {
    console.log(error);
    ctx.page.redirect('/404')
  }
  
}

function renderTemplate(resultsData) {
  setState('prev', window.location.href.slice(21))

  context.render(resultsTemplate(resultsData, getState('title')));
}
