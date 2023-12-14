import React, { createContext, useContext, useState } from 'react'

export const CarContext = createContext(null);

export const CarContextProvider = (props) => {
    const [CarSelected, setCarSelected] = useState (null)
    const  [AllCar, setAllCar] = useState([])
    const [duration, setDuration] = useState()
    const [dataCollector, setDataCollector] = useState([])
    const addToCarSelected = (info) =>{
        setCarSelected(info)
    }

    const resetCarSelected = () => {
          setCarSelected(null)
    }

    const addToAllCar = (info) => {
        setAllCar(info)
    }

    const contextValue = {CarSelected, AllCar, addToCarSelected, addToAllCar, duration, setDuration, dataCollector, setDataCollector,resetCarSelected }
  return (
    <CarContext.Provider value={contextValue}>{props.children}</CarContext.Provider>
  )
}
