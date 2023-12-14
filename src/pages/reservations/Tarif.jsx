import React, { useContext, useEffect, useState } from 'react'
import { CURRENTDATE } from '../../components/STATICS/static';
import '../../components/styles/Tarif.scss'
import AvailableCar from '../../components/AvailableCar';
import { getData } from '../../CRUD/get';
import { CarContext } from '../../context/CarContext';

function Tarif (){
    //state
    const [Cars, setCars] = useState([])
    const [availableCar, setAvailableCar] = useState([])
    const [reservations, setReservations] = useState([])

    const { AllCar, addToAllCar, duration, setDuration, setDataCollector, resetCarSelected } = useContext(CarContext)
    
    

    //recuperation des voitures dans la base de données 
    useEffect(()=> {
        const fetchData = async () =>{
            const data = await getData('http://localhost:5000/voitures'); 
            const resa = await getData('http://localhost:5000/reservations')
            setCars(data); 
            setReservations(resa)
            addToAllCar(data); 
            resetCarSelected(); 
       }
       fetchData() 
    },[])

    //charger les informations sur les voitures 

    useEffect (()=> {
        console.log('liste de toutes les voitures')
        console.log(AllCar); 
    },[AllCar])

    useEffect(()=> {
            console.log(availableCar)
            console.log(duration)
            
    },[availableCar, duration])

    //comportement

    //verification des voitures disponibles Ppur les dates données 
    const handleCheckCar = (begin, end) =>{

        const availableCarChecker = () =>{
            const carIDs = []

            //triage des réservations en fonction des voitures     
            const reservationsTriées = Object.values(reservations.reduce((acc, reservation) => {
                    const carId = reservation.car_ID;
                
                    // Si le tableau pour ce car_id n'existe pas encore, crée-le
                    if (!acc[carId]) {
                    acc[carId] = { car_ID: carId, reservations: [] };
                    }
                
                    // Ajoute la réservation au tableau correspondant au car_id
                    acc[carId].reservations.push(reservation);
                
                    return acc;
             }, {}));              

                    console.log('this is it')
                    console.log(reservationsTriées);

            //verification des voitures disponibles
            const availableCarID = reservationsTriées.filter((resa) =>
                resa.reservations.every((reservation) => 
                        new Date(reservation.debut) > new Date(end) ||
                        new Date(reservation.fin) < new Date(begin)
                    )
            )

                //test si il y a des voitures disponibles
                if (availableCarID.length > 0) {
                    console.log('there are some available cars')
                    console.log(availableCarID)
                    availableCarID.map((car) =>{
                        carIDs.push(car.car_ID);
                    })
                    
                    return carIDs

                }else{
                    alert("there's no car available")
                }   
            }

            const carFilter = (carIDs, allCar) =>{
                        
                const filteredCar = allCar.filter((element) =>
                   carIDs.includes(element.id)
                )

                if (filteredCar.length > 0){
                    console.log('voitures trouvées')
                    console.log(filteredCar)
                }else{
                    console.log('shit')
                }
                return filteredCar
            }

             
        return carFilter(availableCarChecker(), AllCar)
  
    }

    

    


    

    //recuperation des informations sur le formulaire 
    const handleFormData = (e) => {
        e.preventDefault(); 
        const form = e.target;
        const formData = new FormData(form); 
        const debut = formData.get('debut'); 
        const fin = formData.get('fin');
        console.log(debut)
        console.log(fin)

        const end = new Date(fin)
        const begin = new Date(debut)
        setDuration((end - begin)/ (1000 * 60 * 60 * 24))
        setAvailableCar(handleCheckCar(debut, fin))
        setDataCollector({debut, fin})
        

    }



    //affichage
  return (
    <div className='tarifContainer'>
        <div className='QuoteHeader'>

                

                {/* Formulaire de soumission de date en fonction des besoins des utilisateurs */}

                <form action="submit" onSubmit={handleFormData} className='quoteForm'>
                    <div className='eachQuoteItems'>
                        <label htmlFor="debut">date de début</label> <br />
                        <input type="date" min={CURRENTDATE} name='debut' /> <br />
                    </div>

                    <div className='eachQuoteItems'>
                      <label htmlFor="fin">date de fin</label> <br />
                      <input type="date" name='fin' placeholder='date de fin'/> <br />
                    </div>
                    
                        <button className='quoteValidation eachQuoteItems'>Rechercher</button>
                    
                

                
                </form>
                
        </div>
        <div className='AvailableCarSection'>
        {availableCar.length > 0 &&
                availableCar.map((car)=> {
                    return(
                        <AvailableCar data={car} duration={duration}/>
                    )
                    
                })
            }
            

        </div>
    </div>
  )
}


export default Tarif; 