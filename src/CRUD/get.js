//logique de recuperation des données dans la base JSON 

export const getData = async (url) =>{
    try {
        const response = await fetch(url)
        const data = response.json(); 
        return data;
    }catch(error){
        console.log(error.message)
    }
}