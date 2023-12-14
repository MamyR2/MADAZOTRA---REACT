import React, { useEffect } from 'react'
import { DATA } from './Data.js'
import CarList from './CarList.jsx';
import Simu from './Simu.jsx';

function Simulation (){

    //State
    const voitures = DATA; 
    

    useEffect (()=>{
        console.log(voitures)
    }, [])


    //comportement 


    //affichage
  return (
    // <ul>
    //     {
    //       voitures.map((voiture)=> (

    //         <CarList data={voiture}/>
    //       ))
                     
    //     }
    // </ul>


    <Simu/>
  )
}

export default Simulation; 
