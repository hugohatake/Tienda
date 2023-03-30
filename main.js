/*desktop menu*/
const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const shopingCartContainer =document.querySelector("#shopingCartContainer");
const cardsContainer =document.querySelector(".cards-container");
const menuHam = document.querySelector(".menu-hamburguesa");
const menuMob = document.querySelector(".mobile-menu");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const myordersmenu = document.querySelector(".ordersjs");
const myorders = document.querySelector(".my-order");
const maincontainer = document.querySelector(".main-container");
const menuordersmob = document.querySelector(".ordersjsmobile");


menuEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);
menuHam.addEventListener('click', toggleMenumob);
productDetailCloseIcon.addEventListener('click',closeProductDetailAsaide);
myordersmenu.addEventListener('click',toggleOrders);
menuordersmob.addEventListener('click', toggleOrdersmob)

function toggleOrdersmob(){
    menuMob.classList.toggle('inactive');
    myorders.classList.toggle('inactive');
}

function toggleOrders() {
    myorders.classList.toggle('inactive');
    menuDesktop.classList.toggle('inactive');
}

function toggleDesktopMenu() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = shopingCartContainer.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    shopingCartContainer.classList.add('inactive');
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

    //cerrar product detail
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
    }

    shopingCartContainer.classList.toggle('inactive');
}

/*Menu mobile*/
function toggleMenumob() {
    //CERRAR CARRITO
    const ismenuCarritoClosed = shopingCartContainer.classList.contains('inactive');
    
    if(!ismenuCarritoClosed){
    shopingCartContainer.classList.add('inactive');
    }

    closeProductDetailAsaide();

    menuMob.classList.toggle('inactive');
}

/*Detalles de producto*/
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAsaide (){
    productDetailContainer.classList.add('inactive');

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
        productImg.addEventListener('click', openProductDetailAside);

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

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);