import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Formulaire from './components/Formulaire';
import Timer from './components/timer';
import Header from './components/Header';
import Acceuil from './pages/acceuil';
import Caroussel from './components/Caroussel';
import Test from './components/test';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog/Blog';
import { Products } from './pages/Ressources/Products';
import Simulation from './Test/Simulation';
import Tarif from './pages/reservations/Tarif';
import { CarContextProvider } from './context/CarContext';
import ReservationDetails from './pages/reservations/reservationDetails';
import ValidationForm from './pages/reservations/validationForm';
import Recapitulatif from './pages/reservations/recapitulatif';
import AcceuilAdmin from './pages/Admin/acceuilAdmin';
import Modal from './Test/Test';
import Test7 from './Test/Test';
import Test2 from './pages/Test2/Test2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // <React.StrictMode>
  //   <Acceuil />
  // </React.StrictMode>
  <CarContextProvider>
    <Router>

        <Header/>
        
          <Routes>
              <Route path='/' element={<Tarif />}/>  
              <Route path='/blog' element={<Blog/>}/>  
              <Route path='/reservation' element={<ReservationDetails/>}/>  
              <Route  path='/simulation' element={< Simulation />}/>
              <Route  path='/test' element={< AcceuilAdmin />}/> 
              <Route path='/validation' element={< ValidationForm/>}/>
              <Route path='/recapitulatif' element={< Recapitulatif/>}/>


          </Routes>
        
    </Router>
  </CarContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
