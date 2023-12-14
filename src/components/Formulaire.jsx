import React, { useState, useEffect } from 'react'
import Form from './Form.tsx';
import SendData from '../CRUD/create.js';



const Formulaire = () => {
//gestion des states
const [nom, setNom] = useState('Mamy')
const [dataCollector, setDataCollector] = useState({})

useEffect(() => {
  
  console.log(dataCollector);
  SendData(dataCollector);
  setDataCollector('');
}, [dataCollector]);

//comportements
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
  const parcours = formData.get('parcours');   

  setDataCollector({
    nom,
    prenom,
    mail,
    telephone, 
    genre, 
    parcours
  }) 

  // const Mam ={
  //   nom: 'Razafindrakoto', prenom: 'Marc', mail: 'mamyrazanatsirofo@gmail.com', telephone: '0345705412', genre: 'femme'
  // }

  // SendData(Mam);
  form.reset();

  //envoi des informations dans la base de données 
  
  

}




//affichage form
  return (
    
    <div style={{margin: 'auto', width: '50%'}}> 
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Formulaire d'inscription</h1>
        <label htmlFor="nom">nom</label><br />
        <input type="text" name='nom' placeholder=''/> <br />
        
        <label htmlFor="prenom">prenom</label><br />
        <input type="text" name='prenom' placeholder=''/> <br />

        <label htmlFor="nom">mail</label><br />
        <input type="text" name='mail' placeholder='exemple@gmail.com'/> <br />

        <label htmlFor="telephone">telephone</label><br />
        <input type="number" name='telephone' placeholder=''/> <br />

        <label htmlFor="genre">Genre</label><br />
        <input type="radio" name='genre' value='homme'/> <label>homme</label> <br />
        <input type="radio" name='genre' value='femme'/> <label>femme</label> <br />

        <label htmlFor="parcours">parcours</label> <br />
        <select name="parcours" id="">
          <option value="reseau et systeme">reseau et systeme</option>
          <option value="developpement et integration">developpement et intergration</option>
        </select> <br />

        <button>valider</button>
      
      </form>
      
    </div>
  )
}

export default Formulaire;