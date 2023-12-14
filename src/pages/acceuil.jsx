
import React from 'react'
import Header from '../components/Header'
import '../components/styles/acceuilStyle.css'
import Test from '../components/test'



function Acceuil (){
    return(
        <div style={styles.all}>

             <div>
                
                    <Test/>
                
             </div>
        </div>   

        
    )
    
    
}   

const styles = {
    all: {
        
        padding: "10px",
        // Background: "#FFB6C154"
    }
}

export default Acceuil 