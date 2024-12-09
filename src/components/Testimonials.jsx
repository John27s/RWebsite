import React from "react";
import "./Testimonials.css";
import product8 from '../Images/person-1.png';
import product9 from '../Images/person-2.png';
import product10 from '../Images/person-3.png';

function Testimonials(){
    return(
        <div className="GDProducts1">
                <div id="OP2">TESTIMONIALS</div>
                <div id="Cat2"><h3>Opinions</h3></div>
                    <div className="product6">
                    <img src= {product8} id='test-img'></img>
                    <div id="GD3">Absolutely divine, the flavors are so rich and vibrant, and the texture is just perfect. I can't get enough of the Citrus Serenade and Matcha Melody. Sweet Euphoria has truly mastered the art of macaron making!</div>
                    <div id="GD4">Margaret</div>
                </div>
                <div className="product7">
                    <img src= {product9} id='test-img'></img>
                    <div id="GD3">Absolutely divine, the flavors are so rich and vibrant, and the texture is just perfect. I can't get enough of the Citrus Serenade and Matcha Melody. Sweet Euphoria has truly mastered the art of macaron making!</div>
                    <div id="GD4"> Olivia</div>
                </div>
                <div className="product8">
                    <img src= {product10} id='test-img'></img>
                    <div id="GD3">Absolutely divine, the flavors are so rich and vibrant, and the texture is just perfect. I can't get enough of the Citrus Serenade and Matcha Melody. Sweet Euphoria has truly mastered the art of macaron making!</div>
                    <div id="GD4">Nicole</div>
                </div>
                </div>         
    );
}

export default Testimonials;