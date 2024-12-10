import React from "react";
import "./Bestsellers.css";
import product5 from '../Images/product-1.png';
import product6 from '../Images/product-3.png';
import product7 from '../Images/product-6.png';

function Bestsellers({titile}){
    return(
        <div className="Bestsellers">
                <div id="OP3">OUR PRODUCTES</div>
                <div id="Cat3"><h3>{titile}</h3></div>
                    <div className="product33">
                    <img src= {product5} id='img14'></img>
                    <div id="GD1">Fruit Symphony</div>
                    <div id="GD2">$ 4.15</div>
                </div>
                <div className="product44">
                    <img src= {product6} id='img14'></img>
                    <div id="GD1">Caramel Sonata</div>
                    <div id="GD2">$ 2.15</div>
                </div>
                <div className="product55">
                    <img src= {product7} id='img14'></img>
                    <div id="GD1">Matcha Melody</div>
                    <div id="GD2">$ 3.15</div>
                </div>
                </div>         
    );
}

export default Bestsellers;