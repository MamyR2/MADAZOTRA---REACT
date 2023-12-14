//Composant qui gere la mise à jour et modification des données 

import { useState } from 'react'
import '../../../components/styles/Updater.scss'
import { useEffect } from 'react'
const Updater = (props) =>{

    // gestion des states 
    const [user, setUser]= useState({})

    //gestion des variables 
    const users = props.users
    const onSubmit = props.onSubmit

    //gestion des effets de bords, notamment lors du changement de l'ID
    useEffect(() =>{
        setUser(users.find(user => user.id === props.id))
    }, [props.id])

        return(
            <div className='UpdaterContainer'>
                <div className='Container'>
                        <form action="" onSubmit={onSubmit}>
                            
                            <input type="text" name='nom' placeholder='nom' defaultValue={user.nom}  /> <br />
                            <input type="text" name='prenom' placeholder='prenom' defaultValue={user.prenom}  /> <br />
                            <input type="text" name='mail' placeholder='mail' defaultValue={user.mail} /> <br />
                            <input type="text" name='telephone' placeholder='telephone' defaultValue={user.telephone} /> <br />

                            <button className='UpdaterSubmitbtn'>valider</button>

                        </form>
                </div>
                </div>
        )
}

export default Updater