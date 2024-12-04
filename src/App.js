
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Maindiv from './components/Maindiv';
import Categories from './components/Categories';
import Footer from './components/Footer';




function App(){
    return (
        <div>
        <Nav />
        <Maindiv />
        <About />
        <Categories />
        <About />
        <Footer />
        </div>
    );
}

export default App;
