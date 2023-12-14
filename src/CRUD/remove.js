//suppression d un élement dans la base de données ( users, voiture, etc ..) en fonction de l'ID 
export const Delete = (id , type, other) => { 
    const url = `http://localhost:5000/${type}/${id}`
    fetch(url, {
        method : 'DELETE', 
        headers : {
            "Content-Type" : "Application/JSON"
        }
    }).then(res => {
        if(!res.ok){
            throw new Error ("la requête a échoué avec un status " + res.status)
        }
    }).then(res =>{
        console.log(type  + " avec l'ID "+ id +" bien supprimé ")
        other()
        
    }).catch(err => {
        console.log("erreur : " + err)
        
    })
}