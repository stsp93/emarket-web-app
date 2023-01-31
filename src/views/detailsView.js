import { getUser } from "../api/auth.js";
import { getItemDetails } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (item, isOwner) => html`<h2 class="main-title">&rAarr; <a href="/${item.category}">${item.category}</a></h2>
<article class="detials">
    <img src="${item.imageUrl}" alt="${item.title}" class="main-image">
    <div class="details-text">
        <h3 class="details-title">
            ${item.title}
        </h3>
        <p class="details-date">${item.createdOn.slice}</p>
        <p class="price">Price: <strong>${item.price}</strong> $</p>
        <p class="details-description"><strong>Description: </strong>  
            ${item.description}
        </p>
        <br>
        <p class="details-owner">Posted by: <em>${item.owner}</em></p>
    </div>
    <div class="details-buttons">
        ${isOwner ? 
            html`<a href="" class="details-edit">Edit</a>
        <a href="" class="details-delete">Delete</a>`:
    html`<a href="" class="details-contact">Contact</a>`}     
        <a href="/${item.category}" class="details-back">Back to ${item.category}</a>
    </div>

</article>`

export async function showDetails(ctx, next) {
    const itemDetails = await getItemDetails(ctx.params.id);
    const isOwner = getUser().username === itemDetails.owner;
    ctx.render(detailsTemplate(itemDetails, isOwner))
}