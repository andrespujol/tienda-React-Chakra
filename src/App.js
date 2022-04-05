import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar'
import { Cart } from './components/Cart/Cart'
import { WishList } from './components/WishList/WishList';
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './Context/CartContext'

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={'Store'}/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer greeting="Store"/>} />
            <Route exact path="/detail/:productId" element={<ItemDetailContainer/>} />
            <Route exact path="/Cart" element={<Cart/>} />
            <Route exact path="/WishList" element={<WishList/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
