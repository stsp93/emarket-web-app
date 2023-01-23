import { html } from "../lib.js";

const detailsTemplate = () => html`<h2 class="main-title">&rAarr; <a href="">Clothing</a></h2>
<article class="detials">
    <img src="/static/images/clothings.jpg" alt="" class="main-image">
    <div class="details-text">
        <h3 class="details-title">
            Kyoto VIP (skrilleaks Edit)
        </h3>
        <p class="details-date">01.03.2019</p>
        <p class="price">Price: <strong>100</strong> $</p>
        <p class="details-description"><strong>Description: </strong>  
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatem, deserunt perferendis, provident vitae recusandae, quasi tempore porro eligendi est temporibus laboriosam? Mollitia laboriosam blanditiis optio cumque architecto doloribus eos!
        </p>
        <br>
        <p class="details-owner">Posted by: <em>john123</em></p>
    </div>
    <div class="details-buttons">
        <a href="" class="details-edit">Edit</a>
        <a href="" class="details-delete">Delete</a>
        <a href="" class="details-contact">Contact</a>
        <a href="" class="details-back">Back</a>
    </div>

</article>`

export function showDetails(ctx, next) {
    ctx.render(detailsTemplate())
}