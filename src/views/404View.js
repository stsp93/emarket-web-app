import { html } from "../lib.js";

const notFoundTemplate = () => html`        <h2 class="main-title">Page not Found</h2>
<article class="not-found">
    <a class="go-home" href="/">Go Home</a>
    <img class="not-found__img" src="/static/images/404.jpg" alt="404">
</article>`

export function showNotFound(ctx,next) {
    ctx.page.redirect('/404')
    ctx.render(notFoundTemplate());
}