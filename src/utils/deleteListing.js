import { deleteItemListing } from "../api/data.js";

export async function onDelete(context) {
    if(confirm('Are you sure you want to delete that listing?')) {
        try {
            await deleteItemListing(context.params.id);
            context.page.redirect('/profile')
        } catch (err) {
            alert(err)
        }
    }
}