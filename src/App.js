import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CuidadosConsejos } from './Pages/CuidadosConsejos';
import { Nosotros } from './Pages/Nosotros';
import { Ayuda } from './Pages/Ayuda'
import { Shop } from './Pages/Shop';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import NotificationBanner from './Components/Anuncio/NotificationBanner';
import { Footer } from './Components/Footer/Footer';
import { Oportunidades } from './Pages/Oportunidades';
import { Postularse } from './Pages/Postularse';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <NotificationBanner/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cuidadosyconsejos' element={<CuidadosConsejos category="Cuidados y Consejos"/>}/>
        <Route path='/nosotros' element={<Nosotros category="Nosotros"/>}/>
        <Route path='/ayuda' element={<Ayuda category="Ayuda"/>}/>
        <Route path='/oportunidades' element={<Oportunidades category="Oportunidades"/>}/>
        <Route path='/productos' element={<Products/>}/>
          <Route path=':productoId' element={<Products/>}/>
          <Route path='/postularse/:opportunityId' element={<Postularse/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
