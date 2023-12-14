const dataUpdater = (newData, url) => {
    fetch(url , {
        method : 'PATCH', 
        headers : {
            "Content-Type": "application/json"
        }, 
        body : JSON.stringify(newData)
    }).then(res => {
        if(res.ok){
            console.log('mise à jour bien prise en compte')
        }else{
            throw new Error ("mise à jour echoué avec un status " + res.status)
        }
    }).catch(err => {
        console.log(err)
    })
}

export default dataUpdater