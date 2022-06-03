import header from './header';
import navbar from './navbar';
import menu from './menu';
import aboutUs from './aboutUs';
import contact from './contact';
import footer from './footer';

const body = document.querySelector('body');

body.appendChild(navbar());
body.appendChild(header());
body.appendChild(menu());
body.appendChild(aboutUs());
body.appendChild(contact());
body.appendChild(footer());
