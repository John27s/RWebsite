import React from "react";
import './/Footer.css';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import instagram from '../Images/instagram.png';
import logo from '../Images/Logo-vector-lujossjl.svg';
import Button from "./Utilites/Button";



function Footer(){
    return(
        <div>
            <div className="Footer">
                <div className="Deatils">
                    <div className="logo1">
                    <a href='#Blissful Bites' id='logo1'><img src={logo}></img>Blissful Bites</a>
                    </div>
                    <li><p id="Email">info@blissfulbites.com</p></li>
                    <li><p id="Number">+01 234 567 789</p></li>
                    <li><p id="Addres">2438 East Ave
                    Chicago, IL 60402.</p></li>
                    </div>
                <div className="Products">
                    <li><p id="Products">Products</p></li>
                    <li><p id="GourmetDelights">Gourmet Delights</p></li>
                    <li><p id="FruitTreats">Fruit Treats</p></li>
                    <li><p id="Bestsellers">Bestsellers</p></li>
                    </div>
                <div className="Signin">
                    <p id="Products">SignIn</p>
                    <input type="text"id="input"></input>
                    <button>Submit</button>
                </div>
                <div className="Socialmedia">
                    <div>
                        <li><p id="SocialMedia">Social Media</p></li>
                        </div>
                    <div className="cart1">   
                    <li><a href="https://m.facebook.com/" id="cart1"><img src= {facebook} height="20px" width="20px"></img></a></li>
                    <li><a href="https://www.instagram.com/" id="cart1"><img src= { instagram}  height="20px" width="20px"></img></a></li>
                    <li><a href="https://twitter.com/?lang=en" id="cart1"><img src= {twitter}  height="20px" width="20px"></img></a></li>
                    </div> 
                    </div>
            </div>
        </div>
    );
}

export default Footer;