import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CuidadosConsejos } from './Pages/CuidadosConsejos';
import { Nosotros } from './Pages/Nosotros';
import { Shop } from './Pages/Shop';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import NotificationBanner from './Components/Anuncio/NotificationBanner';
import { Footer } from './Components/Footer/Footer';
import { Mejores } from './Components/Mejores/Mejores';
import { Productos } from './Components/Productos/Productos';
import { Contacto } from './Pages/Contacto';
import Ubicacion from './Components/Ubicacion/Ubicacion';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <NotificationBanner />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cuidadosyconsejos' element={<CuidadosConsejos category="Cuidados y Consejos" />} />
          <Route path='/nosotros' element={<Nosotros category="Nosotros" />} />
          <Route path='/contacto' element={<Contacto category="Ayuda" />} />
          <Route path='/mejores' element={<Mejores/>}/>
          <Route path='/productos' element={<Productos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos/:productoId' element={<Products />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/ubicacion' element={<Ubicacion />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
