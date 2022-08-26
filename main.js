/*desktop menu*/
const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarrito =document.querySelector(".product-detail");
const cardsContainer =document.querySelector(".cards-container");
const menuHam = document.querySelector(".menu-hamburguesa");
const menuMob = document.querySelector(".mobile-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);
menuHam.addEventListener('click', toggleMenumob);

function toggleDesktopMenu() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    menuCarrito.classList.add('inactive');
    }

    menuDesktop.classList.toggle('inactive');

}
/*CARRITO*/

function toggleCarritoAside() {
    //CERRAR MENU MOBILE
    const ismenuMobClosed = menuMob.classList.contains('inactive');

    if(!ismenuMobClosed){
    menuMob.classList.add('inactive');
    }

    menuCarrito.classList.toggle('inactive');
}

/*Menu mobile*/
function toggleMenumob() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    menuCarrito.classList.add('inactive');
    }

    menuMob.classList.toggle('inactive');
}
//PRODUCTOS
const productList = [];
productList.push({
    name: 'Vestido slip de espalda con tiras cruzadas unicolor',  
    price: 109,
    image: './pruductos/vestido azul.webp'
});
productList.push({
    name: 'pantalon',  
    price: 199,
    image: './pruductos/vestido azul.webp'
});
productList.push({
    name: 'Drugs',  
    price: 999,
    image: './pruductos/vestido azul.webp'
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg =document.createElement('img');
        productImg.setAttribute('src', product.image);

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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //insertar

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);