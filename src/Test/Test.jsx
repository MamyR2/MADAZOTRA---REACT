import React from 'react'
import {useState} from "react"
import { Modalstyles } from '../components/styles/style'

const Modal = ({closeModal}) => {
    return (

        <div style={Modalstyles.modalBackground}>
             <div style={Modalstyles.modalContainer}>
                <button onClick={() => closeModal(false)} style={Modalstyles.CloseBtn}>X</button>
                <div style={Modalstyles.title}>
                    <h1 style={Modalstyles.title1}>Are you sure you want to continue ?</h1>
                </div>
                <div style={Modalstyles.body}>
                    <p>The next page is awesome! You should move forward, you will enjoy it.  </p>
                </div>
                <div style={Modalstyles.footer}>
                    <button style={Modalstyles.cancel}>Cancel </button>
                    <button style={Modalstyles.continue}>Continue </button>
                </div>
            </div>
        </div>
      )
}

const Test7 = () => {

    const [openModal, setOpenModal] = useState(false)

  return(
    <div>   
        <div style={Modalstyles.container}>
            <h1 style={Modalstyles.header}>Hey, click on the botton to open the modal</h1>
            <button style={Modalstyles.openButton} onClick={() =>{
                setOpenModal(true)
            }}> Open</button>

            {openModal && <Modal closeModal={setOpenModal}/>}
            
        </div>

        <div>
            
        </div>

    </div>  
   

  )
}




export default Test7