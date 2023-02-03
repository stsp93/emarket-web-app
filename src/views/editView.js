import { editListing, getAllCategories, getItemDetails } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { validatePayload } from "../utils/payloadValidation.js";

const editTemplate = (item, categories,err) => html`<h2 class="main-title">Edit</h2>

<form @submit=${onEdit} class="user-form" method="POST">
  <article class="input-group">
    <label for="title">Title*</label>
    <input id="title" name="title" type="text" placeholder="Red Hat" value="${item.title}" />
  </article>
  <article class="input-group">
    <label for="category">Category*</label>
    <select name="category" id="category">
      ${categories.map(c => html`<option value="${c}">${c}</option>`)}
    </select>
  </article>
  <article class="input-group">
    <label for="description">Description*</label>
    <textarea name="description" id="description" cols="30" rows="5"
      placeholder="Describe the item">${item.description}</textarea></article>


  <article class="input-group">
    <label for="price">Price*</label>
    <input id="price" type="text" name="price" placeholder="20.99" value=${item.price} />
  </article>
  <article class="input-group">
    <label for="imageUrl">Image Url</label>
    <input id="imageUrl" type="text" name="imageUrl" placeholder="http://example.com" value=${item.imageUrl} />
  </article>

  <article class="input-group">
    ${err? html`<p class="message-field">* ${err}</p>`: nothing}
  </article>

  <article class="input-group">
    <input class="action-button" type="submit" value="Edit Listing" />
  </article>

  <article class="input-group">
    <input @click=${onCancel} class="action-button" type="button" value="Cancel" />
  </article>
</form>`

let context;
export async function showEdit(ctx, next) {
  context = ctx
  const categories = Object.keys(await getAllCategories());
  const itemDetails = await getItemDetails(ctx.params.id);
  context.categories = categories
  context.itemDetails = itemDetails
  ctx.render(editTemplate(itemDetails, categories));

  // Change category input 
  document.querySelector('#category').value = itemDetails.category
}

async function onEdit(e) {
  e.preventDefault();

  if(!confirm('Are you sure you want to edit this listing?')) return;
  const form = new FormData(e.target)
  const payload = Object.fromEntries(form) ;

  try {
    validatePayload(payload);
    await editListing(context.params.id, payload);
    context.page.redirect(`/details/${context.params.id}`);
  } catch(err) {
    context.render(editTemplate(context.itemDetails, context.categories, err))
  }
}

function onCancel() {

    context.page.redirect(`/details/${context.params.id}`)

}