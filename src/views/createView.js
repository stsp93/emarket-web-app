import { createListing } from "../api/data.js";
import { html, nothing } from "../lib.js";

const createTemplate = (err) => html`<h2 class="main-title">Create</h2>

<form @submit=${onCreate} class="user-form" method="POST">
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
    <label for="location">Location*</label>
    <input
      id="location"
      type="text"
      name="location"
      placeholder="London, GB"
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
    ${err ? html`<p class="message-field">* ${err}</p>`: nothing}
      
  </article>

  <article class="input-group">
    <input class="action-button" type="submit" value="Create" />
  </article>
</form>`


let context;
export function showCreate(ctx, next) {
    context = ctx
    ctx.render(createTemplate());

}

async function onCreate(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const payload = Object.fromEntries(form);
  const { title, description, price, location, imageUrl } = payload;
  try {
    // Payload Validations
    const emptyFields = Object.entries(payload).filter(([k,v]) => v === '').map(([k,v]) => k);
    if(emptyFields.length> 0) throw new Error(`${emptyFields.join(', ')} can\'t be empty`);
    if(title.length < 3) throw new Error('Title need to be at least 3 characters long');

    if(Number.isNaN(+price)) throw new Error('Price need to be a number');

    // Create listing
    await createListing(payload);

    context.page.redirect('/profile')
  }catch(err) {
    context.render(createTemplate(err) );
  }
}