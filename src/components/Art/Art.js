import React, { useEffect, useState } from 'react';
import './Art.css'
import Gallery from '../Gallery/Gallery';
import Cart from '../Cart/Cart';
import { addToDb, loadCartGalleryFromLocalStorage } from '../../utilities/fakeDb';

const Art = () => {

    let [gallerys, setGallerys] = useState([]);
    useEffect(() => {
        fetch('artDetails.JSON')
            .then(response => response.json())
            .then(data => setGallerys(data))
    }, []);


    let [cartsGallery, setCartsGallery] = useState([]);
    useEffect(() => {
        let allQuantity = [];
        let getCart = loadCartGalleryFromLocalStorage();
        for (let id in getCart) {
            let addedItem = gallerys.find(gallery => gallery.id === id);
            if (addedItem) {
                let quantity = getCart[id];
                addedItem.quantity = quantity + 1;
                allQuantity.push(addedItem);
            }
        }
        setCartsGallery(allQuantity)
    }, [gallerys]);



    let addToGallery = (item) => {
        // console.log(item);
        let exists = cartsGallery.find(gallery => gallery.id === item.id);
        let newCartItems = [];
        if (!exists) {
            item.quantity = 1;
            newCartItems = [...cartsGallery, item];
        }
        else {
            let rest = cartsGallery.filter(gallery => gallery.id !== item.id);
            item.quantity = item.quantity + 1;
            // exists.quantity = exists.quantity + 1;
            newCartItems = [...rest, item];
        }
        setCartsGallery(newCartItems)
        addToDb(item.id)
    }

    return (
        <div className='art'>
            <div className='art-inside'>
                <p className='art-title'>Select your desire one</p>

                <div className="art-gallery">
                    {
                        gallerys.map(gallery => <Gallery gallery={gallery} key={gallery.id} addToGallery={addToGallery}></Gallery>)
                    }
                </div>
            </div>


            <div className="cart-gallery">
                <Cart cartsGallery={cartsGallery}></Cart>
            </div>
        </div>
    );
};

export default Art;