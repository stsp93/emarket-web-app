import { render, html } from '../lib.js'
import { getUser } from "../api/auth.js";

const createHeader = (user) => html`<div class="logo">
    <img src="/static/images/logo.png" alt="Shop open e-market" />
  </div>
  <nav class="header__nav">
    <button @click=${onNavClick} class="nav__button">
      <i class="fa-solid fa-bars"></i>
    </button>
    <ul>
      <li class="nav__li"><a href="/">Categories</a></li>
      <!-- USER -->
      ${user
        ? html`<li class="nav__li"><a href="/profile">Profile</a></li>
            <li class="nav__li"><a href="/user/logout">Logout</a></li>`
        : html`<li class="nav__li"><a href="/user/login">Login</a></li>
            <li class="nav__li"><a href="/user/register">Register</a></li>`}
      <!-- GUEST -->
    </ul>
  </nav>
  <form @submit=${onSearch}>
    <div>
      <input
        name="query"
        class="search-box"
        type="text"
        maxlength="30"
        placeholder="Search for anything"
      />
      <button class="search-box__button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </form> `;

const header = document.querySelector('header');
let context;
export function showHeader(ctx, next) {
    context = ctx;
    const user = getUser()
    render(createHeader(user), header)

    next()
}

function onNavClick(){
    document.querySelectorAll('.nav__li').forEach(el => el.classList.toggle('nav__active'));
}

function onSearch(e) {
  e.preventDefault()
  const form = new FormData(e.target);
  const query = Object.fromEntries(form).query;
  
  context.page.redirect(`/search/${query}`);

}


