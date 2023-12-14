//logique de soumission des informations dans la base de données 


const SendData = (dataToSend, URL) => {
    const url = URL

    const requestOptions ={
        method: 'POST', 
        headers: {
            "Content-Type" : "application/JSON"
        },
        body : JSON.stringify(dataToSend)
    }; 
fetch(url, requestOptions)
.then(response => response.json())
.then(data => {
    console.log("données envoyées avec succès", data); 
    return data;
})
.catch(error => {
    console.error('Erreur lors de l\'envoi des données :', error);
})
}

export default SendData;
