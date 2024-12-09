import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../Images/Logo-vector-lujossjl.svg';
import logo1 from '../Images/cart.png';


function Nav(){
    return (
        <div>
        <div className='TopNav'>
            <Link to='/' id='logo'><img src={logo}></img>Blissful Bites</Link>
            <ul id='container'>
                <li><Link to='/GourmetDelights'>Gourmet Delights</Link></li>
                <li><Link to='/FruitTreats'>Fruit Treats</Link></li>
                <li><Link to='/New'>New</Link></li>
                <li><Link to='/Bestsellers'>Bestsellers</Link></li>
            </ul>
            <div className='Cart'><a href='#Cart'><img src={logo1} ></img></a>            
            </div>
        </div>
        
        </div>
    );
}

export default Nav;

