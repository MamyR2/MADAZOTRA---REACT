import React, { useEffect } from 'react'
import {useState} from 'react'
import './styles.css'
import { DATA } from './Data'
import CarList from './CarList.jsx';

const Simu = () => {

    //gestion des state
    const [availableCar, setAvailableCar] = useState([])

    //gestion d'évenement



    //verification des voitures disponibles Ppur les dates données 
    const handleCheckCar = (begin, end) => {
        const AvailableCars = DATA.filter((car) => 
            car.reservations.length === 0 ||
            car.reservations.every((reservation) => 
                new Date(reservation.start_date) > new Date(end) ||
                new Date(reservation.end_date) < new Date(begin)
            )
        );
        return AvailableCars;
    }
      
    useEffect (()=> {
        console.log(availableCar)
    }, [availableCar])

    const handleFormDate = (e) => {
        e.preventDefault(); 
        const form = e.target;
        const formData = new FormData(form); 
        const debut = formData.get('debut'); 
        const fin = formData.get('fin');
        console.log(debut)
        console.log(fin)

        
        setAvailableCar(handleCheckCar(debut, fin))
        

    }


  const currentDate = new Date().toISOString().split('T')[0];
  return (
    <div className='availabilitySection' >
        <div className='SimulationForm'>
            <form action="submit" onSubmit={handleFormDate}>
                <label htmlFor="debut">date de début</label> <br />
                <input type="date" min={currentDate} name='debut' /> <br />

                <label htmlFor="fin">date de fin</label> <br />
                <input type="date" name='fin'/> <br />

                <button>valider</button>
            </form>
        </div>
       
        <div className='availableCar'>
            {availableCar.length > 0 &&
                availableCar.map((car)=> {
                    return(
                        <CarList data={car}/>
                    )
                    
                })
            }
        </div>
        
    </div>
    
    
  )
}

export default Simu; 