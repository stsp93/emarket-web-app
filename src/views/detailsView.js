import { getUser } from "../api/auth.js";
import { deleteItemListing, getItemDetails } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (item, isOwner) => html`<h2 class="main-title">&rAarr; <a href="/${item.category}">${item.category}</a></h2>
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
        ${isOwner ? 
            html`<a href="/edit/${item._id}" class="details-edit">Edit</a>
        <a @click=${onDelete} href="" class="details-delete">Delete</a>`:
    html`<a href="" class="details-contact">Contact</a>`}     
        <a href="/${item.category}" class="details-back">Back to ${item.category}</a>
    </div>

</article>`

let context;
export async function showDetails(ctx, next) {
    context = ctx;
    const itemDetails = await getItemDetails(ctx.params.id);
    const isOwner = getUser()?.username === itemDetails.owner;
    ctx.render(detailsTemplate(itemDetails, isOwner))
}


async function onDelete() {
    if(confirm('Are you sure you want to delete that listing?')) {
        try {
            await deleteItemListing(context.params.id);
            context.page.redirect('/profile')
        } catch (err) {
            alert(err)
        }
    }
}
