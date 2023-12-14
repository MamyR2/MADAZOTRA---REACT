//fonction qui se charge de recuperer une voiture en fonction de l'ID et de la liste des voitures

export const searchCar = (identifiant, allCarlist) =>{
    const CarFound = allCarlist.find((Car) => 
       
          Car.id === identifiant
    )

    return(CarFound)
}

//fonction qui se charge de recuperer l'utilisateur en fonction de l'ID et de la liste des users
export const searchUser = (id, userList) =>{
    const user = userList.find(user => user.id === id)
    console.log('kangenglz')
    console.log(user)
    return user
}

