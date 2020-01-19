import HeaderBar from './views/components/Header'
import Footer from './views/components/Footer';

const router= async ()=>{


    const header = null || document.getElementById('header_container');
    const footer = null || document.getElementById('footer_container');
    const content = null || document.getElementById('page_container');

    header.innerHTML = HeaderBar.render();
    await HeaderBar.afterRender();

    footer.innerHTML = Footer.render();
    await Footer.afterRender();
}

window.addEventListener("load",router);