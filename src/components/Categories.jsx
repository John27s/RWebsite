import React from "react";
import './/Categories.css';
import product2 from '../Images/product-2.png';
import product3 from '../Images/product-4.png';
import product4 from '../Images/product-6.png';


function Categories(){
    return(
            <div className="categories">
                <div id="cate" >
                <div id="OP">OUR PRODUCTES</div>
                <div id="Cat"><h3>Categories</h3></div>
                <div id="img10">
                    <div className="product2">
                    <img src= {product2} id='img11'></img>
                    <div id="GD">Gourmet Delights</div>
                    </div> 
                    <div className="product2">
                    <img src= {product3} id='img11'></img>
                    <div id="GD">Fruit Treats</div> 
                    </div >
                    <div className="product2">
                    <img src= {product4} id='img11'></img> 
                    <div id="GD">Best Sellers</div> 
                    
                    </div>
                    
                    
                </div>
                
                </div>
                              
        </div>
    );
}

export default Categories;
