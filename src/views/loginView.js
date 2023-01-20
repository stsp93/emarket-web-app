import { html } from '../lib.js'

const loginTemplate = () => html`<h2 class="main-title">Login</h2>

<form class="user-form" method="POST">
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


export function showLogin(ctx, next) {
    ctx.render(loginTemplate());

}