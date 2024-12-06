
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Maindiv from './components/Maindiv';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Product from './components/Product';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';


function App(){
    return (
        <Router>
            <div>
                <Nav />
            
                <Routes>
                    <Route path='/'element={ <Maindiv />} />
                    <Route path='/FruitTreats'element={<Product />} />
                    <Route path='/New'element={<Product />} />
                    <Route path='/BestSellers'element={<Product />} />
                    <Route path='/GourmetDelights'element={<Product />} />

                </Routes>
                <About Color={"orangered"} text={"Indulge in the delicate dance of flavors with our exquisite macarons. At Blissful Bites, we craft each macaron with love and precision, ensuring a euphoric experience with every bite."} bgColor={"orangered"}/>
                <Categories />
                <About Color= {"white"} text={"Explore our enchanting selection and elevate your senses to new heights. Let your taste buds embark on a journey of pure bliss."} bgColor={"white"} />
                <Footer />
            </div>
        </Router>

    );
}

export default App;
