import Header from './views/components/Header.js'
import Footer from './views/components/Footer.js';
import Home from './views/pages/Home.js'
import About from './views/pages/About.js'
import Utils from './services/Utils.js'
import PostShow from './views/pages/PostShow.js'


let routes={
    '/' : Home,
    '/about':About,
     '/p/:id'      : PostShow,
    //   '/register'   : Register
}
const router = async ()=>{
   
    const header = null || document.getElementById('header_container');
    const footer = null || document.getElementById('footer_container');
    const content = null || document.getElementById('page_container');

    header.innerHTML = Header.render();
    await Header.afterRender();

    footer.innerHTML = Footer.render();
    await Footer.afterRender();
  
    const request= Utils.parseRequestURL();

    const parseurl = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    let page = routes[parseurl] ? routes[parseurl] : Error404
    content.innerHTML = await page.render();


}

window.addEventListener('haschange',router);
// Listen on page load:
window.addEventListener('load', router);