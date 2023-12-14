import React, { useContext, useEffect } from 'react'
import { CarContext } from '../../context/CarContext'
import AvailableCar from '../../components/AvailableCar'
import '../../components/styles/reservationDetails.css'
import { Check } from '@phosphor-icons/react'
import { format } from 'date-fns-tz'
import { useNavigate } from 'react-router-dom'

function ReservationDetails () {

    //gestion des states et variables

    const {CarSelected, AllCar, dataCollector, setDataCollector, duration  } = useContext(CarContext)

    //formatage de la date 
    const dateObjdebut = new Date(dataCollector.debut);
    const dateObjfin = new Date(dataCollector.fin);

    const debut = format(dateObjdebut, 'EEEE dd MMMM yyyy'); 
    const fin = format(dateObjfin, 'EEEE dd MMMM yyyy'); 

    const navigate = useNavigate()

    //verification si toutes les informations sont importés avec succès 
    useEffect(()=> {
        console.log('vous êtes maintenant sur la page : détail de réservation')
        console.log('liste de la voiture selectionnées')
        console.log(CarSelected)
        console.log('liste de toutes les voitures')
        console.log(AllCar)
        console.log("liste des infos dans dataCollector")
        console.log(dataCollector)
        console.log("durée de location")
        console.log(duration)
    },[])

    //gestion des comportements (evenements, etc ...)
    //bouton continuer la réservation
    const handleContinueReservationClick = () => {
        console.log("you clicked continue")
        const prix = duration * CarSelected.prix_par_heure
        setDataCollector({...dataCollector, prix})
        navigate('/validation')
    }
    
  return (
    <div className='ReseravationStep1Container'>
                <div className='AllReservaitonDetails'>
                

                <div className='CarDiplayer'>
                    
                    <div className='TipsItems'>
                            <Check size={30} color='green' className='check'/><span>Annulation gratuite jusqu'à 48 heures à l'avance</span>
                    </div>
                    <AvailableCar data={CarSelected}/>

                    <hr />
                    <p>More information to add</p>
                </div>
                

                    <div className='BookingMoreInfo'>
                        

                        <div className='eachBookingInfo'>
                            <h3>Prise en charge et restitution du véhicule</h3>
                            <p>début de location : {debut}</p>
                            <p>fin de location: {fin}</p>
                        </div>

                        <div className='eachBookingInfo'>
                            <h3>Prise en charge et restitution du véhicule</h3>
                            <p>début de location : {debut}</p>
                            <p>fin de location: {fin}</p>
                        </div>
                    
                    </div>
               
               

    </div>  

    <button className='quoteValidation eachQuoteItems continuer' 
    onClick={handleContinueReservationClick}
    >continuer la réservation</button>

    </div>
    

    
  )
}

export default ReservationDetails; 