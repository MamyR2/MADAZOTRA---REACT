import React, { useContext, useEffect } from 'react'
import { CarContext } from '../../context/CarContext'
import SendData from '../../CRUD/create'
import { useNavigate } from 'react-router-dom'
import '../../components/styles/validationForm.scss'
import dataUpdater from '../../CRUD/update'
const ValidationForm = () => {

  //navigation 
  const navigate = useNavigate()
    //gestion des states et variables
    const {CarSelected, dataCollector, setDataCollector} = useContext(CarContext)

    useEffect(() =>{
        console.log('verification chargement de toutes les informations requises ')
        console.log("voiture selectionnées par l'utilisateur")
        console.log(CarSelected)
        console.log("dataCollector")
        console.log(dataCollector)

    }, [])


    useEffect(() => {
      SendInfos()   
    }, [dataCollector]);

    //gestion de l'envoi des informations 
    const SendInfos = () =>{
      //verification si dataCollector a bien reçu toutes les informations avant de les envoyer à la base de données
       if (dataCollector.users !== undefined && dataCollector.JSON !== "[]") {
          console.log("envoi des informations")
          console.log(dataCollector)     

          //modelisation des informations sur la réservation
          const newData = Object.fromEntries(
            Object.entries(dataCollector).filter(([cle, valeur]) => 
              cle  !== 'users'
            )
          ) 

          const reservation = {...newData, car_ID : CarSelected.id}
          
          fetch('http://localhost:5000/users', {
            method : 'POST', 
            headers : {
              'Content-Type': 'application/json', 
            }, 
            body  :  JSON.stringify(dataCollector.users)
            
          }).then((res)=>{
              if(res.ok){
                console.log('mamy succès')
                  return res.json().then(res =>{
                 
                    //recuperation de l'user ID 
                  
                  console.log('this is ther user ID')
                  const reservations = {...reservation , user_ID : res.id}
                  

                    //enregistremet de la reservation avec l user ID
                  fetch('http://localhost:5000/reservations', {
                    method : 'POST',
                    headers : {
                      'Content-Type': 'application/json',
                      
                    },
                    body : JSON.stringify(reservations)
                  }).then(res =>{
                      if(res.ok){
                        console.log('operation terminé')
                        
                      }else{
                        throw new Error("erreur lors de la creation de la reservation : " + res.message )
                      }
                  })
                
                
                  
                })
              }else{
                throw new Error(res.message)
              }
          })


          // SendData(reservation, 'http://localhost:5000/reservations')
          // console.log('this is the new data' )
          // console.log(Mamy)

          console.log("informations envoyées")
          navigate("/recapitulatif")
          
         
       }else{
          console.log("ne fais rien")
          console.log(dataCollector)
       }
      
     
      
    }
      
      //comportements
      //envoi des informations dans la base de données 
      const handleSubmit = (event) =>{
            event.preventDefault();
            console.log(event.target)
            const form = event.target; 
            const formData = new FormData(form);
            const prenom = formData.get('prenom');
            const nom = formData.get('nom');
            const mail = formData.get('mail');
            const telephone = formData.get('telephone');
            const genre = formData.get('genre');
            const mdp = formData.get('mdp'); 
            const mdpConfirm = formData.get('mdpConfirm');  


            //controle des infos entrées par l'user
            if (mdp === mdpConfirm){
                console.log("OK")
                 setDataCollector({
                        ...dataCollector, 
                        users : {
                          nom,
                          prenom,
                          mail,
                          telephone, 
                          genre, 
                          mdp
                        },
                        
                      }) 
                    
            }else{
                console.log("nope")
            }
            
      
       
      
          
        
      }
      
      //affichage form
        return (
          
          <div style={{margin: 'auto', width: '50%'}} className='validationFormContainer'> 
            <form action="submit" onSubmit={handleSubmit}>
              <h1>Formulaire de validation de réservation</h1>
              <label htmlFor="nom">nom</label><br />
              <input type="text" name='nom' placeholder='' required/> <br />
              
              <label htmlFor="prenom">prenom</label><br />
              <input type="text" name='prenom' placeholder='' required/> <br />
      
              <label htmlFor="nom">mail</label><br />
              <input type="text" name='mail' placeholder='exemple@gmail.com' required/> <br />
      
              <label htmlFor="telephone">telephone</label><br />
              <input type="number" name='telephone' placeholder='' required/> <br />
      
              
              <label htmlFor="genre">Genre</label><br />
              <div className='genre'>
                <input type="radio" name='genre' value='homme'/> <label>homme</label> <br />
                <input type="radio" name='genre' value='femme'/> <label>femme</label> <br />
              </div>

                <label htmlFor="mdp">créer un mot de passe</label><br />
                <input type="password" name='mdp' required/> <br />

                
                <label htmlFor="mdpConfirm">confirmer le mot de passe</label><br />
                <input type="password" name='mdpConfirm' required/> <br />


              <button>valider</button>
            
            </form>
            
          </div>
        )
      }

export default ValidationForm