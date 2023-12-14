import { useEffect, useState } from "react";
import { getData } from "../CRUD/get";
import './styles/Test.css'

function Test (){
    //state
    const [info, setInfo] = useState([])
    

    //comportement

    //gestion de la récuperation des données à afficher
    useEffect (()=> {
       const fetchData = async () =>{
            const data = await getData('http://localhost:5000/voitures'); 
            setInfo(data); 
            console.log(info)
       }
       fetchData() 
    },[])

    //gestionnaire écouteurs d'évenements
    const handleClick = () =>{
        alert("you clicked on the button but no action has been set yet")
    }

    //affichage
    return(

        // <div className="TestArea">   
            <div className="bigSection">
                <h2 className="sectionTitle">Liste des voitures disponibles</h2>
                <div className="carContainer">
                
            
                    {
                        info.map((info) => {
                            return(
                                <div className="sectionComment">
                                        <h3>{info.modele}</h3>
                                        <img className="imgAuto" src={info.image} alt="voiture" />
                                        <p>prix par heure : {info.prix_par_heure} euros</p>
                                        <button
                                            onClick={handleClick}
                                        >détails</button>
                                </div>
                            
                            )
                        })
                    }
                
                </div>
            </div>
        // </div>
        
        
    )
}


export default Test; 