import {page} from './lib.js';
import { decoratorCtx } from './middleware.js';
import { showHeader } from './views/headerView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showHome } from './views/homeView.js';
import { showCategory, showResults } from './views/resultsView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showCreate } from './views/createView.js';

page(decoratorCtx);
page(showHeader);
page('/user/login',showLogin)
page('/user/register',showRegister)
page('/search/:query', showResults)
page('/details/:id', showDetails)
page('/edit/:id',showEdit)
page('/create', showCreate)
page('/:category', showCategory)
page('/',showHome)

page.start()