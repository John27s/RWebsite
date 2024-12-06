import React from 'react';
import './Maindiv.css';
import product from '../Images/product-1.png';
import product1 from '../Images/product-5.png';
import Button from './Utilites/Button';



function Maindiv() {
    return(
        <div>
            <div className='maindiv'>
                <img src= {product} id='img'></img>
                <div className='product'>
                    <h1>Savor the Artistry of Handcraft</h1>
                    <img src= {product1} id='img1'></img>
                    <p>Step into our world where every page 
                    holds the promise of new ideas and endless possibilities.<Button /></p>
                    <div className='Button'></div>  
                </div>
            </div>
        </div>
    );

}

export default Maindiv;