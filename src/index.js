import {page} from './lib.js';
import { accordionMiddleware, decoratorCtx, isAuth } from './middleware.js';
import { showHeader } from './views/headerView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showHome } from './views/homeView.js';
import { showCategory, showResults } from './views/resultsView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showCreate } from './views/createView.js';
import { showNotFound } from './views/404View.js';
import { showProfile } from './views/profileView.js';
import { logoutController } from './controllers/logoutController.js';

page(decoratorCtx);
page(showHeader);
page(accordionMiddleware);
page('/404', showNotFound)
page('/user/login',showLogin)
page('/user/register',showRegister)
page('/user/logout', logoutController)
page('/profile',isAuth ,showProfile)
page('/search/:query', showResults)
page('/details/:id', showDetails)
page('/edit/:id',isAuth,showEdit)
page('/create',isAuth, showCreate)
page('/:category', showCategory)
page('/',showHome)
page('*','/404');

page.start()