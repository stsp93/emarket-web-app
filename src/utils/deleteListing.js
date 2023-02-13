export async function onDelete() {
    if(confirm('Are you sure you want to delete that listing?')) {
        try {
            await deleteItemListing(context.params.id);
            context.page.redirect('/profile')
        } catch (err) {
            alert(err)
        }
    }
}