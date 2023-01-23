import { render, html } from '../lib.js'
import { getUser } from "../api/auth.js";

const createHeader = (user) => html`<div class="logo">
  <a href="/"><img src="/static/images/logo.png" alt="Shop open e-market" /></a>

</div>
<nav class="header__nav">
  <button @click=${onNavClick} class="nav__button">
    <i class="fa-solid fa-bars"></i>
  </button>
  <ul>
    <!-- FOR DEV ONLY -->
    <li class="nav__li"><a href="/edit/1234">DEV ONLY edit</a></li>

    ${user
        ? html`
        <!-- USER -->
        <li class="nav__li"><a href="/profile">Profile</a></li>
    <li class="nav__li"><a href="/create">Create listing</a></li>
    <li class="nav__li"><a href="/user/logout">Logout</a></li>`
        : html`
    <!-- GUEST -->
    <li class="nav__li"><a href="/user/login">Login</a></li>
    <li class="nav__li"><a href="/user/register">Register</a></li>`}
  </ul>
</nav>
<form @submit=${onSearch}>
  <div>
    <input name="query" class="search-box" type="text" maxlength="30" placeholder="Search for anything" />
    <button class="search-box__button">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>`;

const header = document.querySelector('header');
let context;
export function showHeader(ctx, next) {
  context = ctx;
  const user = getUser()
  render(createHeader(user), header)

  next()
}

function onNavClick() {
  document.querySelectorAll('.nav__li').forEach(el => el.classList.toggle('nav__active'));
}

function onSearch(e) {
  e.preventDefault()
  const form = new FormData(e.target);
  const query = Object.fromEntries(form).query;

  context.page.redirect(`/search/${query}`);

}


