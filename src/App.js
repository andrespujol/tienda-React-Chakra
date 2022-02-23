import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Tienda'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
