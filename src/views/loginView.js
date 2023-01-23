import { login } from '../api/user.js';
import { html } from '../lib.js'

const loginTemplate = () => html`<h2 class="main-title">Login</h2>

<form @submit=${onLogin} class="user-form" method="POST">
  <article class="input-group">
    <label for="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="john@abv.bg"
    />
  </article>
  <article class="input-group">
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      placeholder="********"
    />
  </article>
  <article class="input-group">
    <p class="message-field"></p>
</article>
  <article class="input-group">
    <input class="action-button" type="submit" value="Login">
</article>
</form>`

let context;
export function showLogin(ctx, next) {
    context = ctx;
    ctx.render(loginTemplate());

}

async function onLogin(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const {email,password} = Object.fromEntries(form);
  let res;
  try {
    res = await login(email,password)
    context.page.redirect('/')
  } catch(err) {
    alert(err)
  }

}