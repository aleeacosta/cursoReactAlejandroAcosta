import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar>
        <CartWidget></CartWidget>
      </NavBar>
      <ItemListContainer greeting="Mi primer Componente"></ItemListContainer>
    </>
  );
}

export default App;
