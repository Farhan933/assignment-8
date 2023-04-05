import React from 'react';
import ButtonsWithTime from './ButtonsWithTime';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartsGallery }) => {
    let quantity = 0;
    let time = 0;
    for (let gallery of cartsGallery) {
        quantity = quantity + gallery.quantity;
        time = time + gallery.time * gallery.quantity;
    }

    // for toast 
    let useToast = () => {
        toast.success('Need more practise');
    }

    return (
        <div className='cart'>
            <div>
                <p className='title'>Add a Break</p>
                <div>
                    <ButtonsWithTime />
                </div>
            </div>

            <h4>Selected item: {quantity}</h4>
            <p>Total time: {time} hour</p>

            <div>
                <button onClick={useToast} className='cart-button'>
                    <p>Project Done</p>
                </button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default Cart;
