import React from "react";
import './/Categories.css';
import product2 from '../Categories/product-2.png';
import product3 from '../Categories/product-3.png';
import product4 from '../Categories/product-5.png';


function Categories(){
    return(
        <div className="categories">
            <p>Our products</p>
            <h3>Categories</h3>
            <img src= {product2} id='img'></img>
            <img src= {product3} id='img'></img>
            <img src= {product4} id='img'></img>

            </div>
    );
}

export default Categories;
