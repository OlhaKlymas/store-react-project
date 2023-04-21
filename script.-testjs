
let goods = []
getGoods().then(result => result.forEach(item => {
    const article = document.createElement('article');
    article.classList.add('product-list__item', 'tile', 'js-product');
    article.setAttribute('data-id', item.id);

    article.innerHTML = `
        <a href="${item.href}" class="tile__link">
            <span class="tile__top">
                <span class="tile__badge tile__badge--${item.badge}">${item.badge}</span>
                <span class="tile__delete hidden js-delete-item"> 
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6043_11153)">
                        <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6043_11153">
                        <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            </span>
            <span class="tile__image">
                <img src="${item.images[0].preview}" alt="${item.title}">
            </span>
            <span class="tile__title">${item.title}</span>
            <span class="tile__info">
            <span class="tile__price">
                <span class="tile__old-price">${item.price.old} ₴</span>
                <span class="tile__new-price">${item.price.current} ₴</span>
            </span>
                <button class="btn js-add-to-cart-btn">Купити</button>
            </span>
        </a>
    `;
    document.querySelector('.product-list').appendChild(article);
    goods = [...result]
})).then(result => {
    let deleteButtons = document.querySelectorAll('.js-delete-item');
    let addToCartButtons = document.querySelectorAll('.js-add-to-cart-btn');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            removeFromCart(btn.closest('.product-list__item'));
        })
    });

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(button);
        })
    });
    
    showDeleteButton(ids);
})


let popupCart = document.querySelector('.js-popup-cart');
let popupOrder = document.querySelector('.js-popup-order');
let showOrderBtn = document.querySelector('.js-show-order');
let popupCartList = document.querySelector('.js-popup-cart-list');
let headerCount = document.querySelector('.js-header-count');
let ids = getAddedProducts();

setCount(ids.length);
setCountEvent();
showOrderBtn.addEventListener('click', () => {
    hidePopup(popupCart);
    showPopup(popupOrder);
})


async function getGoods() {
    let url = 'https://my-json-server.typicode.com/OlhaKlymas/json-lesson/goods';
    let response = await fetch(url);
    return response.json();
}

function showDeleteButton(ids) {
    let products = document.querySelectorAll('.js-product');
    products.forEach(function (product) {
        if (ids.includes(product.dataset.id)) {
            let deleteButton = product.querySelector('.js-delete-item');
            deleteButton.classList.remove('hidden');
        }
    })
}

function setCount(num) {
    headerCount.innerText = num;
}

function setCountEvent() {
    headerCount.addEventListener('click', () => {
        showCartProducts(getAddedProducts());
        showPopup(popupCart);
    });
}

function getAddedProducts() {
    return localStorage.getItem('cart')?.split(', ') || [];
}


function removeFromCart(parent, isPopup = false) {
    let id = parent.dataset.id;
    ids = ids.filter((item) => item != id);
    ids.length > 0 ? localStorage.setItem('cart', ids.join(', ')) : localStorage.removeItem('cart');
    setCount(ids.length);
    if(!isPopup) {
        let deleteButton = parent.querySelector('.js-delete-item');
        deleteButton.classList.add('hidden');
        let tileTitle = parent.querySelector('.tile__title').innerText;
        showNotification(tileTitle, 'видалено');
    }
}


function addToCart(button) {
    let parent = button.closest('.product-list__item');
    let deleteButton = parent.querySelector('.js-delete-item');
    let id = parent.dataset.id;
    let tileTitle = parent.querySelector('.tile__title').innerText;

    deleteButton.classList.remove('hidden');
    ids.push(id);
    console.log(ids);
    localStorage.setItem('cart', ids.join(', '));
    setCount(ids.length);
    showNotification(tileTitle, 'додано');
}

function showNotification(productName, text) {
    let notification = document.querySelector('.js-notification');
    let notificationText = document.querySelector('.js-notification-text');
    notification.classList.add('notification--active');
    notificationText.innerText = `Продукт ${productName} успішно ${text}!`
    setTimeout(() => notification.classList.remove('notification--active'), 3000);
}

function showPopup(popup) {
    let popupClose = popup.querySelector('.js-popup-close');
    popup.classList.add('popup--active');
    popupClose.addEventListener('click', () => hidePopup(popup));
}
function hidePopup(popup) {
    popup.classList.remove('popup--active');
}

function showCartProducts(productIds) {
    popupCartList.innerHTML = '';
    goods.forEach(item => {
        if(productIds.includes(String(item.id))) {
            let filtered = productIds.filter(el => el === String(item.id));
            let counter = filtered.length;
            let itemList = document.createElement('li');
            itemList.className = "popup-cart__list-item cart-item";
            itemList.dataset.id = item.id;
            itemList.innerHTML = `<span class="cart-item__img">
                                    <img src="${item.images[0].preview}" alt="${item.title}">
                                </span>
                                <span class="cart-item__info">
                                    <a href="${item.href}" class="cart-item__link">
                                        <span class="cart-item__title">${item.title}</span>
                                        <span class="cart-item__price">
                                            <span class="tile__count">${counter}</span>
                                            <span class="tile__price">Вартість - ${item.price.current} ₴</span>
                                            <span class="tile__total-price">Сума - ${item.price.current * counter} ₴</span>
                                        </span>
                                    </a>
                                </span>
                                <span class="cart-item__remove js-cart-remove">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_6043_11153)">
                                        <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_6043_11153">
                                        <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </span>`;
            popupCartList.appendChild(itemList);
        }
    });
    setPopupCartRemove();
}

function setPopupCartRemove() {
    let removeBtns = document.querySelectorAll('.js-cart-remove');

    removeBtns.forEach(btn => btn.addEventListener('click', function(){
        let parent = btn.closest('.cart-item');
        parent.classList.add('hidden');
        removeFromCart(parent, true)
    }))
}