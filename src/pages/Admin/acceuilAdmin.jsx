import React, { useContext, useEffect ,useState } from 'react'
import { CarContext } from '../../context/CarContext'
import AvailableCar from '../../components/AvailableCar'
import CarList from '../../components/CarList'
import { getData } from '../../CRUD/get'
import {Trash, Pencil } from '@phosphor-icons/react'
import { Delete } from '../../CRUD/remove'
import Modal from '../../components/Modal'
import { AcceuilAdminStyle } from '../../components/styles/style'
import '../../components/styles/acceuilAdmin.css'
import Updater from './components/Updater'
import { searchUser } from '../../components/fonctions/fonctions'

//fonction permettant de recuperer les users 
const getUserList = async () =>{

    try{
      const data = await getData("http://localhost:5000/users")
      console.log("informations recuperées : " )
      console.log(data)
      return data; 

    }catch(err){
        console.log("err.message")
    }
   
}

//affichage du composant acceuil admin
function AcceuilAdmin () {


    //gestion des states et variables 
    const {AllCar} = useContext(CarContext)
    const [users, setUsers] = useState([])
    const [UpdaterDipslayer, setUpdaterDisplayer] = useState({state : false , id : null})
    const [openModal, setOpenModal] = useState(false)

// fonction qui gere la recuperation des users
const dataGetter = async () => {
    const UserList = await getUserList()
    setUsers (UserList)
    
}

//recuperation de la liste des utilisateurs enregistrés
    useEffect(() =>{
        dataGetter()
        console.log('liste des Users')
        console.log(users)
    }, [])    

    //comportement // gestion des evenements

    //gestion de modification 
    const handleUpdate = (id) => {
        console.log(id)
        setUpdaterDisplayer({
            state : true, 
            id : id,
        })
        setOpenModal(true)
        console.log("modalSetterTrue Successfully updated")
    }

    //gestion de modification des informations 
    const handleUpdateSubmit = (e) =>{
     
        //gestion du formulaire
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        console.log(formData)
        const nom = formData.get("nom")
        const prenom = formData.get("prenom")
        const mail = formData.get("mail")
        const telephone = formData.get("telephone")
        
        const newUserInfo = {
            nom, 
            prenom, 
            mail, 
            telephone
        }
        
        //envoi des modifications à la base de données 
        const url = `http://localhost:5000/users/${UpdaterDipslayer.id}`
        fetch(url, {
            method : 'PATCH', 
            body : JSON.stringify(newUserInfo), 
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res =>{
            if(res.ok){
                console.log('modification avec succès')
                res.json().then(json =>{
                    dataGetter()
                    console.log(json)
                }).then(
                    setUpdaterDisplayer({}),
                    setOpenModal(false)
                )
            }else{
                console.log('erreur lors de la mise à jour')
                console.log(res)
            }
        })
    }


    //gestion de suppression 
    const handleDelete = async (id, entityToDelete, other = null ) => {             
         
        const user = searchUser(id, users)
        const msg =  `êtes-vous sur de vouloir supprimer ${user.nom} ${user.prenom} de la base de données`
        if(window.confirm(msg)){
            Delete(id, entityToDelete, other) 
          }else{
            console.log('nope, je ne confirme pas')
          }
          
          

    }


  //rendu final du composant AcceuilAdmin   
  return (
    <div>
        
       

        {
            openModal && (
            <Modal
                 closeModal={setOpenModal} 
                 title={'Formulaire de modification'}    
                 Component={<Updater id = {UpdaterDipslayer.id} users ={users} onSubmit = {handleUpdateSubmit} />} 
            />
                 
            ) 
        }
            
            <div style={AcceuilAdminStyle.Container} className='acceuilAdminContainer' >
               
                <h1 style={AcceuilAdminStyle.title1}>bienvenu sur la page d'administration</h1>
                    
                    <div style={AcceuilAdminStyle.dataSection} className='dataSection'>
                            <h2>nombre d'utilisateur enregistré : <span className={users.length % 2 === 0 ? 'green' : 'other'}> {users.length} </span> </h2>
                            
                        <table>
                                <tr style={AcceuilAdminStyle.eachInfo} className='eachInfo'>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>mail</th>
                                </tr>
                            
                                {
                                    
                                    users.map((user)=> {
                                        
                                        return( 
                                            
                                            // <div style={AcceuilAdminStyle.eachInfo} >
                                            
                                                <tr style={AcceuilAdminStyle.eachInfo} className='eachInfo' >
                                                    <td>{user.nom}</td>
                                                    <td>{user.prenom}</td>
                                                    <td>{user.mail}</td>
                                                    <td><Pencil color='#172554' size={30} weight='fill' onClick={() => handleUpdate(user.id)}/></td>
                                                    <td><Trash color='red' size={30} weight='fill'onClick={() => handleDelete(user.id, "users", dataGetter)}/></td>
                                                </tr>
                                            
                                                // <ul>
                                                //     <li>nom : {user.nom}</li>
                                                //     <li>prenom : {user.prenom}</li>
                                                //     <li>mail : {user.mail}</li>
                                                //     <li>genre : {user.genre}</li>

                                                //     <button onClick={() => handleUpdate(user.id)}>modifier</button>
                                                //     <button onClick={() => handleDelete(user.id, "users", dataGetter)}>supprimer</button>
                                                // </ul>
                                            // </div>
                                            

                                        )

                                    })
                                }
                        </table>


                    
                    </div>
                   
            </div>

    </div>
  )

  
}


export default AcceuilAdmin