import './App.css';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/Navigation';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { Routes, Route } from "react-router-dom";
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider >
        <NavBar />
        <Routes>
            <Route path="/display" element={<DisplayContent/>} />
            <Route path="/order/:id" element={<PlaceOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
