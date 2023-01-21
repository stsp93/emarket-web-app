import { render, html } from '../lib.js'
import { getUser } from "../api/auth.js";

const createNav = (user) => html`<button @click=${onNavClick} class="nav__button"><i class="fa-solid fa-bars"></i></button>
<ul>


    <li class="nav__li"><a href="/">Categories</a></li>
    <!-- USER -->
    ${user ? 
    html`<li class="nav__li"><a href="/profile">Profile</a></li>
    <li class="nav__li"><a href="/user/logout">Logout</a></li>`: 
    html`<li class="nav__li"><a href="/user/login">Login</a></li>
    <li class="nav__li"><a href="/user/register">Register</a></li>`}
    <!-- GUEST -->

</ul>`

const nav = document.querySelector('.header__nav');

export function showNav(ctx, next) {
    const user = getUser()
    render(createNav(user), nav)

    next()
}

function onNavClick() {
    document.querySelectorAll('.nav__li').forEach(el => el.classList.toggle('nav__hidden'));
}