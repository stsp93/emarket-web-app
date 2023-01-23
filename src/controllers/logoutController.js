import { logout } from "../api/user.js";

export async function logoutController(ctx,next) {
    await logout();
    ctx.page.redirect('/');
}