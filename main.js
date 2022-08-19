/*desktop menu*/
const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    menuCarrito.classList.add('inactive');
    }

    menuDesktop.classList.toggle('inactive');

}
/*CARRITO*/
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarrito =document.querySelector(".product-detail");
carritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    //CERRAR MENU MOBILE
    const ismenuMobClosed = menuMob.classList.contains('inactive');

    if(!ismenuMobClosed){
    menuMob.classList.add('inactive');
    }

    menuCarrito.classList.toggle('inactive');
}

/*Menu mobile*/
const menuHam = document.querySelector(".menu-hamburguesa");
const menuMob = document.querySelector(".mobile-menu");
menuHam.addEventListener('click', toggleMenumob);

function toggleMenumob() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    menuCarrito.classList.add('inactive');
    }

    menuMob.classList.toggle('inactive');
}


