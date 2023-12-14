import React, { useContext, useEffect } from 'react'
import { CarContext } from '../../context/CarContext'





//affichage des infos resa et utilisateur 
const Recap = (props) =>{
    const {debut, fin, prix } = props.user
    const {nom, prenom, mail, telephone, id} = props.user.users
    const {modele} = props.car
    return (
        <div>
            <h1>Informations personnelles</h1>   
            <ul>
                <li>nom : {nom}</li>
                <li>prenom : {prenom}</li>
                <li>mail : {mail}</li>
                <li>telephone : {telephone}</li>
            </ul>
            <hr /> <br />
            <h1>Informations sur la réservation</h1>   
            <ul>
                <li>modele de voiture : {modele}</li>
                <li>debut de location : {debut}</li>
                <li>fin de location : {fin}</li>
                <li>tarif total : {prix}</li>
            </ul>
        </div>
    )

}

//affichage
const Recapitulatif = () => {
    // gestion des states 
    const {CarSelected, dataCollector} = useContext(CarContext)

    //verification des informations 
    useEffect(()=> {
        console.log("verification de data Collector")
        console.log(dataCollector)
        console.log(CarSelected)
    }, [])

    //affichage
  return (
    <Recap user = {dataCollector} car = {CarSelected}/>
  )
}



export default Recapitulatif