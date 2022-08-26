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
const cardsConstainer =document.querySelector(".cards-container");
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


//CERRAR MENUS
const mainContainer = document.querySelector(".main-container");
mainContainer.addEventListener('click', colseMenusClick);

function colseMenusClick() {

    const ismenuMobClosed = menuMob.classList.contains('inactive');
    const ismenuDesktopClosed = menuDesktop.classList.contains('inactive')
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if (!ismenuMobClosed || !ismenuDesktopClosed || !ismenuCarritoClosed )  {

        menuMob.classList.add("inactive");
        menuDesktop.classList.add("inactive");   
        menuCarrito.classList.add("inactive");
    }
}

//PRODUCTOS

const productList = [];
productList.push({
    name: 'Vestido slip de espalda con tiras cruzadas unicolor',  
    price: $109,
    imagen: './pruductos/vestido azul.webp'
});
productList.push({
    name: 'pantalon',  
    price: $199,
    imagen: './pruductos/vestido azul.webp'
});
productList.push({
    name: 'Drugs',  
    price: $999,
    imagen: './pruductos/vestido azul.webp'
});
/*
<div class="product-card">
                <img src="https://c0.wallpaperflare.com/preview/998/911/616/royal-enfield-rider-bike-motor-bike.jpg" alt="" class="product-img">
                <div class="product-info">
                    <div>
                    <p>$120.00</p>
                    <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="cart">
                    </figure>
                </div>
            </div>*/

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg =document.createElement('img');
    productImg.setAttribute('src', product.imagen);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('figure');
    img.setAttribute('src', './icons/bt_add_to_cart.svg');

    //insertar

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoFigure);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsConstainer.appendChild(productCard);

}
