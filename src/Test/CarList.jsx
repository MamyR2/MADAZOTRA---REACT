import React from 'react'

const CarList = (props) => {
    const {id, name, type, year, available, reservations} = props.data; 
    const handleClick = () => {
        console.log(id)
    }
    
  return (
    
           <li key={{id}}>
                name = {name} <br />
                type = {type} <br />
                Disponible = {available ? "oui" : 'non'} <br />
                date de réservation = {reservations.length > 0 ? 
                    reservations.map((reservation)=>{
                        return(
                            <p>
                            dates : { reservation.start_date } au { reservation.end_date }
                            </p>
                        )
                    }) : "pas de réservation"
                } <br />
            <button onClick={handleClick}>see more</button>
           </li> 

        
  )
}


export default CarList