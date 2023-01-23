import { html } from "../lib.js";

const editTemplate = () => html` <h2 class="main-title">Edit</h2>

<form class="user-form" method="POST">
  <article class="input-group">
    <label for="title">Title*</label>
    <input
      id="title"
      name="title"
      type="text"
      placeholder="Red Hat"
    />
  </article>
  <article class="input-group">
    <label for="category">Category*</label>
    <select name="category" id="category">
      <option value="Clothing">Clothing</option>
      <option value="Electronics">Electronics</option>
      <option value="Deals">Deals</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Hobbies">Hobbies</option>
      <option value="Housing">Housing</option>
    </select>
  </article>
  <article class="input-group">
      <label for="description">Description*</label>
      <textarea name="description" id="description" cols="30" rows="5" placeholder="Describe the item"></textarea></article>
  

  <article class="input-group">
    <label for="price">Price*</label>
    <input
      id="price"
      type="text"
      name="price"
      placeholder="20.99"
    />
  </article>
  <article class="input-group">
    <label for="imageUrl">Image Url</label>
    <input
      id="imageUrl"
      type="text"
      name="imageUrl"
      placeholder="http://example.com"
    />
  </article>
  
  <article class="input-group">
      <p class="message-field">Error lorem</p>
  </article>

  <article class="input-group">
    <input class="action-button" type="submit" value="Create" />
  </article>
</form>`

export function showEdit(ctx, next) {
    ctx.render(editTemplate())
}