import React from 'react';
import './Gallery.css'

const Gallery = ({ gallery, addToGallery }) => {
    // console.log(gallery)
    let { img, name, info, duration, time } = gallery;

    return (
        <div className='gallery'>
            <div className='image'>
                <img src={img} alt="" />
            </div>

            <div className='gallery-info'>
                <p className='gallery-name'>{name}</p>
                <p>{info}</p>
                <p>Expected : {duration}</p>
                <p>Time Required : {time} hour</p>
            </div>

            <button onClick={() => addToGallery(gallery)} className='gallery-button'>
                <p>Add to cart gallery</p>
            </button>
        </div>
    );
};

export default Gallery;