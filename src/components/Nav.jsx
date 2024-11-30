import React from 'react';
import './Nav.css';
import logo from '../Images/Logo-vector-lujossjl.svg';
import logo1 from '../Images/cart.png';


function Nav(){
    return (
        <div>
        <div className='TopNav'>
            <a href='#Blissful Bites' id='logo'><img src={logo}></img>Blissful Bites</a>
            <ul id='container'>
                <li><a href='Gourmet Delights'>Gourmet Delights</a></li>
                <li><a href='Fruit Treats'>Fruit Treats</a></li>
                <li><a href='New'>New</a></li>
                <li><a href='BestSellers'>BestSellers</a></li>
            </ul>
            <div className='Cart'><a><img src={logo1} ></img></a>            
            </div>
        </div>
        
        </div>
    );
}

export default Nav;