import { getCategoryResults, searchItems } from "../api/data.js";
import { RESULTS_PER_PAGE } from "../config/constants.js";
import { html } from "../lib.js";

const resultsTemplate = (resultsData, title) => html`<h2 class="main-title">${title}</h2>

${resultsData.results.length > 0 ? html`<ul class="offers-list">${resultsData.results.map(item => itemCard(item))}</ul>`
: html`<p class="offer-empty">Nothing found...</p>`}


<div class="pagination">
  <button @click=${changePage.bind(null, resultsData.page - 1)} class="pagination-arrow"><i
      class="fa-solid fa-chevron-left"></i></button>
  <p class="page">${resultsData.page}/${resultsData.pages || 1}</p>
  <button @click=${changePage.bind(null, resultsData.page + 1)} class="pagination-arrow"><i
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

// State
let allResults;
let context;
let title;
let currentPage= 1;

export async function showResults(ctx, next) {
  context = ctx;
  const query = ctx.query
  allResults = await searchItems(query);
  title = `${allResults.length} result${allResults.length === 1 ? '' : 's'} found`;

  const resultsData = paginationParser(allResults);

  ctx.render(resultsTemplate(resultsData, title));
  if (query) document.getElementsByClassName('search-box').value = query
}

export async function showCategory(ctx, next) {
    context = ctx;
  const category = ctx.params.category
  title = category;
  try {
    allResults = await getCategoryResults(category);
    const resultsData = paginationParser(allResults);
    ctx.render(resultsTemplate(resultsData, category));
  } catch (error) {
    console.log(error);
    ctx.page.redirect('/404')
  }

}

// Pagination logic

function paginationParser(allResults, page = currentPage) {
  const results = allResults.slice((page - 1) * RESULTS_PER_PAGE, RESULTS_PER_PAGE * page);
  const pages = Math.ceil(allResults.length / RESULTS_PER_PAGE);
  return { results, page, pages }
}

function changePage(page) {
  const resultsData = paginationParser(allResults, page)
  if(resultsData.page === 0 || resultsData.page > resultsData.pages) return;
  currentPage = page;
  context.render(resultsTemplate(resultsData, title));
}