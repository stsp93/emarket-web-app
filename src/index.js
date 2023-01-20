import {page} from './lib.js';
import { decoratorCtx } from './middleware.js';
import { showNav } from './views/navView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showHome } from './views/homeView.js';

page(decoratorCtx);
page(showNav);
page('/user/login',showLogin)
page('/user/register',showRegister)
page('/',showHome)

page.start()