import { getProfile } from "../api/data.js";
import { RESULTS_PER_PAGE } from "../config/constants.js";
import { html } from "../lib.js";
import { onDelete } from "../utils/deleteListing.js";

const profileTemplate = (resultsData) => html`<h2 class="main-title">Your Listings</h2>
${resultsData.results.length ? html`<ul class="offers-list">
${resultsData.results.map(createCard)}
</ul>

<div class="pagination">
  <button @click=${changePage.bind(null,resultsData.page - 1)} class="pagination-arrow"><i class="fa-solid fa-chevron-left"></i></button>
  <p class="page">${resultsData.page}/${resultsData.pages}</p>
  <button  @click=${changePage.bind(null,resultsData.page + 1)} class="pagination-arrow"><i class="fa-solid fa-chevron-right"></i></button>
</div>` : html`<p>No offers found...</p>`}
`

const createCard = (listing) => html`<li>
  <article class="offer-card">
    <a href="/offers/${listing._id}" class="offer-link"><img class="offer-img" src="${listing.imageUrl}" alt="${listing.title}" /></a>

    <div class="offer-text">
      <a class="offer-title offer-link" href="">${listing.title}</a>
      <p class="location">${listing.location}</p>
      <p class="price"><strong>${listing.price}</strong> $</p>
      <br>
      <div class="profile-buttons">
        <a href="/offers/${listing._id}/edit" class="profile-edit">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete.bind(null,context)} class="profile-delete">Delete</a>
      </div>
    </div>

  </article>
</li>`

let allResults;
let currentPage = 1;
let context;
export async function showProfile(ctx, next) {
  context = ctx;
  const profile = await getProfile();
  allResults = profile
  const resultsData = paginationParser(profile);
  ctx.render(profileTemplate(resultsData));
}


// TODO Separate pagination logic in utils
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