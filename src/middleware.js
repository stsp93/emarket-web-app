import { getUser } from "./api/auth.js";
import { stopAccordionAnimation } from "./controllers/accordionController.js";
import { html,render } from "./lib.js";

const root = document.querySelector('main')

export function decoratorCtx(ctx,next) {
    ctx.render = function(section) {
        render(section,root)
    }
    ctx.query = parseQueryString(ctx.querystring)
    // query parser
    function parseQueryString(query) {
        let params = {};
        let queries = query.split("&");
        for (let i = 0; i < queries.length; i++) {
          let temp = queries[i].split("=");
          params[temp[0]] = temp[1];
        }
        return params;
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