
import React, { useEffect } from "react"
import { useState } from "react"
import { styles } from "../styles"


function Timer (props){
    //state 
    const [currentTime, setCurrentTime] = useState(new Date())

    //comportement
    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setCurrentTime(new Date())   
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
        
    }, [])

    

    //affichage
    return(
        <span className={props.className}>
            {currentTime.toLocaleTimeString()}
           
        </span>
    )
}


export default Timer