import { createListing, getAllCategories } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { validatePayload } from "../utils/payloadValidation.js";

const createTemplate = (categories, err) => html`<h2 class="main-title">Create</h2>

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
      ${categories.map(c => html`<option value="${c}">${c}</option>`)}
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

export async function showCreate(ctx, next) {
  const categories =Object.keys(await getAllCategories()) 
  context = ctx
  context.categories = categories
    console.log(categories);
    ctx.render(createTemplate(categories));

}

async function onCreate(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const payload = Object.fromEntries(form);

  try {
    validatePayload(payload)

    // Create listing
    await createListing(payload);

    context.page.redirect('/profile')
  }catch(err) {
    context.render(createTemplate(context.categories,err) );
  }
}