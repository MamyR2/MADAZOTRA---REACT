import React, { useState } from "react"
import './styles/carouselStyle.css';



function Caroussel (){

    //state
    const [currentId, setCurrentId] = useState(1)

    //gesion des images du carroussel
    const images =[
        {id:1, src : require('../assets/images/donuts/1.jpg')},
        {id:2, src : require('../assets/images/donuts/2.jpg')},
        {id:3, src : require('../assets/images/donuts/3.jpg')},
        {id:4, src : require('../assets/images/donuts/4.jpg')},
        {id:5, src : require('../assets/images/donuts/5.jpg')},
        {id:6, src : require('../assets/images/donuts/6.jpg')},
        {id:7, src : require('../assets/images/donuts/7.jpg')},
        {id:8, src : require('../assets/images/donuts/8.jpg')},
        {id:9, src : require('../assets/images/donuts/9.jpg')},
       
    ]


    //comportement 
    const nextSlide = () => {
        if (currentId >= images.length) {
            setCurrentId(1);
        }else{
            setCurrentId(currentId + 1)
        }
    }

    const prevSlide = () => {
        if (currentId <= 1) {
            setCurrentId(images.length);
        }else{
            setCurrentId(currentId - 1)
        }
    }


        return(
            <div className="carousel">
                <img src={require('../assets/images/leftArrow.jpg')} className="icones left" alt="" onClick={prevSlide} />

                
                    {images.map((image) => {
                        return(
                        <img src={image.src} style={styles.image} className = {image.id === currentId ? 'active' : 'hidden'} alt="image" />

                        )
                    })}
                
                

                 <img src={require('../assets/images/rightArrow.jpg')} className="icones right" alt="" onClick={nextSlide} />

            </div>
           
            
        )
}

const styles ={
    image: {
            width: 400, 
            height: 600, 
            
    }
}

export default Caroussel