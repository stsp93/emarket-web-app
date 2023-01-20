import { html } from "../lib.js";

const homeTemplate = () => html`<h2 class="main-title">Categories</h2>
<ul class="categories-list">
  <li class="category">
    <a href="/clothings"
      ><img src="/static/images/clothings.jpg" alt="" />
      <p>Clothing</p></a
    >
  </li>
  <li class="category">
    <a href="/electronics"
      ><img src="/static/images/electronics.jpg" alt="" />
      <p>Electronics</p></a
    >
  </li>
  <li class="category">
    <a href=""
      ><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p></a
    >
  </li>
  <li class="category">
    <a href=""
      ><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p></a
    >
  </li>
  <li class="category">
    <a href=""
      ><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p></a
    >
  </li>
  <li class="category">
    <a href=""
      ><img src="/static/images/electronics.jpg" alt="" />
      <p>Cat1</p></a
    >
  </li>
</ul>`

export function showHome(ctx,next) {
    ctx.render(homeTemplate());
}