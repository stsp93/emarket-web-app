import { getUser } from "./api/auth.js";
import { stopAccordionAnimation } from "./controllers/accordionController.js";
import { html,render } from "./lib.js";

const root = document.querySelector('main')

export function decoratorCtx(ctx,next) {
    ctx.render = function(section) {
        render(section,root)
    }
    next()
}

export function accordionMiddleware(ctx, next) {
    stopAccordionAnimation()
    next()
}

export function isAuth(ctx,next) {
    if(getUser()) {
        next()
    } else {
        ctx.page.redirect('/404')
    }
}