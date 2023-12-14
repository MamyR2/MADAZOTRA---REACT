import { useState } from "react";

function App (){
    //state 
    const [fruits, setFruits] = useState([
      {id:1 , nom: 'Banane'},
      {id:2 , nom: 'Abricots'},
      {id:3 , nom: 'Cerises'}, 
      {id:4 , nom: 'kiwi'}
    ])
    
    const [nouveauFruit, setNouveauFruit] = useState(''); 
    //comportement 
    //Gestion de suppression
    const handleDelete = (id) => {
      console.log(id);

      const fruitCopy = [...fruits]; 

      const fruitUpdated = fruitCopy.filter((fruit) => fruit.id !== id)

      setFruits(fruitUpdated)
    }
   
    //Gestion de changement d'etat pour input
    const handleChange = (event) => {
      setNouveauFruit(event.target.value)
      console.log(nouveauFruit)
    }

    //Gestion de soumission du formulaire
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const fruitCopy = [...fruits];
      const id = new Date().getTime();
      const nom = nouveauFruit;

      fruitCopy.push({id, nom}); 
      setFruits(fruitCopy);
      setNouveauFruit('');
      console.log(fruits);
    }

    

    //Affichage
    return (
      <div>
        <h2>Liste de fruits</h2>
        <ul>
          {fruits.map((fruit) => {
            return(
            <li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button></li>
            )
          })}
        </ul>
        <form action="submit" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={nouveauFruit} type="text" name="" id="" placeholder="ajouter un fruit..." required />
          <button>ajouter +</button>
        </form>
      </div>
    )


}
export default App;
