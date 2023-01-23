import { html } from "../lib.js";

const profileTemplate = () => html`      <h2 class="main-title">Your Listings</h2>
<ul class="offers-list">
  <li>
    <article class="offer-card">
      <a href="" class="offer-link"
        ><img class="offer-img" src="/static/images/clothings.jpg" alt=""
      /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href=""
          >Brand new Nice Thingy that's red</a
        >
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
        <br>
        <div class="profile-buttons">
            <a href="" class="profile-edit">Edit</a>
            <a href="" class="profile-delete">Delete</a>
        </div>
      </div>
      
    </article>
  </li>

  <li>
    <article class="offer-card">
      <a href="" class="offer-link"
        ><img class="offer-img" src="/static/images/clothings.jpg" alt=""
      /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href=""
          >Brand new Nice Thingy that's red</a
        >
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
        <br>
        <div class="profile-buttons">
            <a href="" class="profile-edit">Edit</a>
            <a href="" class="profile-delete">Delete</a>
        </div>
      </div>
      
    </article>
  </li>

  <li>
    <article class="offer-card">
      <a href="" class="offer-link"
        ><img class="offer-img" src="/static/images/clothings.jpg" alt=""
      /></a>

      <div class="offer-text">
        <a class="offer-title offer-link" href=""
          >Brand new Nice Thingy that's red</a
        >
        <p class="location">Burgas, Bulgaria</p>
        <p class="price"><strong>20.99</strong> $</p>
        <br>
        <div class="profile-buttons">
            <a href="" class="profile-edit">Edit</a>
            <a href="" class="profile-delete">Delete</a>
        </div>
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

export function showProfile(ctx, next) {
  ctx.render(profileTemplate());
}
