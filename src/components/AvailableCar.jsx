import React, { useContext } from 'react'
import '../components/styles/Test.css'
import '../components/styles/Tarif.scss'
import { CurrencyEur, Suitcase, SuitcaseRolling, User,  } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { CarContext } from '../context/CarContext';
import { searchCar } from './fonctions/fonctions';

const AvailableCar = (props) => {
    const {id, modele, image, prix_par_heure, nombre_de_places, vitesse} = props.data;
    const {CarSelected, addToCarSelected, AllCar, duration} = useContext(CarContext)
    
    const navigate = useNavigate(); 

    const handleClick = () => {
        console.log(id)

        const Car = searchCar(id, AllCar)
        addToCarSelected(Car)
        navigate("/reservation")
    }
    
  return (
 
                    <div className=" displayCarSection">
                            
                            <div>
                                 <img className="carAvailable" src={image} alt="voiture" />
                            </div>

                            <div className='availableCarInfo'>
                                <h3>{modele}</h3>
                                <ul className='amenitiesCarList'>
                                    <li><User size={20}/> {nombre_de_places} sièges</li>
                                    <li>< Suitcase size={20}/>1 grande valise</li>
                                    <li><SuitcaseRolling size={20 }/>1 petite valise</li>
                                    <li>{vitesse}</li>
                                    <li > <CurrencyEur size={20}/>{prix_par_heure} euros par jour</li>
                                </ul>

                                <div className='TotalCarPriceContainer'><span>prix pour {duration} jours :</span> <br /> <span className='TotalCarPrice'>{prix_par_heure * duration} € </span> </div>
                                
                                {
                                    CarSelected === null &&
                                    <button className='availableCarButton'
                                    onClick={handleClick}
                                >Voir les conditions</button>
                                }
                                
                            </div>
                            
                           
                    </div>
        
  )
}


export default AvailableCar