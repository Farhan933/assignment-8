// use local storage for manage cart gallery 

let addToDb = id => {
    let cartsGallery = {};
    let galleryValue = localStorage.getItem('carts-gallery');
    if (galleryValue) {
        cartsGallery = JSON.parse(galleryValue);
    }

    let quantity = cartsGallery[id];
    if (quantity) {
        let newQuantity = quantity + 1;
        cartsGallery[id] = newQuantity;
    }
    else {
        cartsGallery[id] = 1;
    }

    localStorage.setItem('carts-gallery', JSON.stringify(cartsGallery));
}


let loadCartGalleryFromLocalStorage = () => {
    let cartsGallery = {};
    let galleryValue = localStorage.getItem('carts-gallery');
    if (galleryValue) {
        cartsGallery = JSON.parse(galleryValue);
    }
    return cartsGallery;
}

export {
    addToDb,
    loadCartGalleryFromLocalStorage
}