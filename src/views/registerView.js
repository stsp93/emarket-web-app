import { html } from '../lib.js';

const registerTemplate = () => html`<h2 class="main-title">Register</h2>

<form class="user-form" method="POST">
  <article class="input-group">
    <label for="email">Email*</label>
    <input id="email" name="email" type="email" placeholder="john@abv.bg" />
  </article>
  <article class="input-group">
    <label for="username">Username*</label>
    <input id="username" name="username" type="text" placeholder="john123" />
  </article>
  <article class="input-group">
    <label for="password">Password*</label>
    <input id="password" type="password" name="password" placeholder="********" />
  </article>
  <article class="input-group">
    <label for="repeatPassword">Repeat Password*</label>
    <input id="repeatPassword" type="password" name="repeatPassword" placeholder="********" />
  </article>
  <article class="input-group">
    <p class="message-field">* Mandatory fields</p>
  </article>
  <article class="input-group">
    <input class="action-button" type="submit" value="Register">
  </article>
</form>`

export function showRegister(ctx, next) {
  ctx.render(registerTemplate());
}