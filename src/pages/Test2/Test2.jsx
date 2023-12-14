import React from 'react'
import '../../components/styles/style.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { List } from '@phosphor-icons/react'

const Test2 = () => {

   const [info, setInfo] = useState([])

   const a = () => {
    var b = []
      for ( var i=1; i<668; i++) {
        b.push(`file 'index.m3u8${i}'`)
      }
    
    setInfo(b)
    console.log('affichage de b')
    console.log(b)


   }

   useEffect (() =>{
      a();
   }, [])

   const styles = ({
      liste:{
        listStyle : 'none'
      },

      container : {
        margin : 0, 
        padding:  0, 
        
      }
   })
   

  return (
    // <div className='bigContainer'>
    //       <h1 >Sass </h1>
    //       <p className='para'>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero ad est!
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Itaque at, repellat eum aliquam soluta, error impedit corrupti voluptatum 
            
    //         distinctio id sequi doloremque! Architecto aliquid unde iure, sunt nostrum
    //           cupiditate dolorem aliquam earum incidunt blanditiis iusto, odit autem sapiente
    //           numquam quod.
    //       </p>
    // </div>

   
      info.map((data) =>{
        return(
          <div style={styles.container}>
            
              <li style={styles.liste}>{data}</li>
            
          </div>
        )
      })
    
    
  )
}



export default Test2; 
