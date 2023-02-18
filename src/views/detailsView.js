import { getUser } from "../api/auth.js";
import { getItemDetails } from "../api/data.js";
import { html } from "../lib.js";
import { onDelete } from "../utils/deleteListing.js";
import { state } from "../utils/paginationUtil.js";

const detailsTemplate = (item) => html`<h2 class="main-title">&rAarr; <a href="/category/${item.category}">${item.category}</a></h2>

<article class="detials">
    <img src="${item.imageUrl}" alt="${item.title}" class="main-image">
    <div class="details-text">
        <h3 class="details-title">
            ${item.title}
        </h3>
        <p class="details-date">${item.createdOn.slice(0,10)}</p>
        <p class="price">Price: <strong>${item.price}</strong> $</p>
        <p class="details-description"><strong>Description: </strong>  
            ${item.description}
        </p>
        <br>
        <p class="details-owner">Posted by: <em>${item.owner}</em></p>
    </div>
    <div class="details-buttons">
        ${item.isOwner ? 
            html`<a href="/offers/${item._id}/edit" class="details-edit">Edit</a>
        <a @click=${onDelete.bind(null,context)} href="" class="details-delete">Delete</a>`:
    html`<a href="" class="details-contact">Contact</a>`}     
        <a  href="${state.previousPage}" class="details-back">Back </a>
    </div>

</article>`

let context;
export async function showDetails(ctx, next) {
    console.log(state.previousPage);
    context = ctx;
    const itemDetails = await getItemDetails(ctx.params.id);
    itemDetails.isOwner = getUser()?.username === itemDetails.owner;
    ctx.render(detailsTemplate(itemDetails))
}

