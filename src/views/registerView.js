import { register } from '../api/user.js';
import { html, nothing } from '../lib.js';

const registerTemplate = (err) => html`<h2 class="main-title">Register</h2>

<form @submit=${onRegister} class="user-form" method="POST">
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
    ${err ? html`<p class="message-field">* ${err}</p>`: nothing}
    
  </article>
  <article class="input-group">
    <input class="action-button" type="submit" value="Register">
  </article>
</form>`


let context;
export function showRegister(ctx, next) {
  context = ctx
  ctx.render(registerTemplate());
}

async function onRegister(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const payload = Object.fromEntries(form);
  const {email, username,password, repeatPassword} = payload
  try {
    const emptyFields = Object.entries(payload).filter(([k,v]) => v === '').map(([k,v]) => k);
    if(emptyFields.length> 0) throw new Error(`${emptyFields.join(', ')} can\'t be empty`);
    if(email.length < 3) throw new Error('Email should be at least 3 characters long');
    if(username.length < 3) throw new Error('Username should be at least 3 characters long');
    if(password.length < 3) throw new Error('Password should be at least 3 characters long');
    if(password !== repeatPassword) throw new Error('Passwords don\'t match');

    await register(email,username, password);

    context.page.redirect('/user/login')
  } catch (err) {
    console.log(err);
    context.render(registerTemplate(err))
  }
}