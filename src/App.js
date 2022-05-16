import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <><AppContextProvider>
        <CartProvider>
          <BrowserRouter>
          
            <NavBar>
              <CartWidget></CartWidget>
            </NavBar>

            <Routes>
              
              <Route path='/' element={<Home titulo="Fine Art Shop"></Home>}/>
              <Route path='/productos' element={<ItemListContainer greeting="Productos"></ItemListContainer>}/>
              <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
            </Routes>  

            <Footer></Footer>      
          
          </BrowserRouter>
        </CartProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
