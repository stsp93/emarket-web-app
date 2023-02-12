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
page('/user/login',showLogin)
page('/user/register',showRegister)
page('/user/logout', logoutController)
page('/profile',isAuth ,showProfile)
page('/search', showResults)
page('/offers/create',isAuth, showCreate)
page('/offers/:id/edit',isAuth,showEdit)
page('/offers/:id', showDetails)
page('/category/:category', showCategory)
page('/',showHome)
page('*',showNotFound);

page.start()