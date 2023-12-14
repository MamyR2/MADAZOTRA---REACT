

//gestion de style du modal
export const Modalstyles = ({
    header:{
        textAlign : 'center',
    },
    container: {
        margin : "auto",
        display :   "flex",
        flexDirection : "column",
        alignItems : 'center', 
        padding : "5px 0",
    }, 
    openButton: {
        width : 100,
        background : '#0180f3', 
        border : '1px #0180f3 solid', 
        color : 'white', 
        padding : 5, 
        borderRadius : 5, 
        justifySelf : 'center',
        
    }, 
    modalBackground: {
        // width : '100vw', 
        height : '100vh',
        // backgroundColor : "rgba(200, 200, 200)",
        backgroundColor: 'white',  
        position : 'fixed', 
        display : 'flex', 
        justifyContent : 'center', 
        alignItems : 'center',
        // position : 'absolute', 
        right : '0', 
        
        
    }, 
    modalContainer: {
        width : '500px', 
        height : '500px', 
        // height : '90vh', 
        backgroundColor : 'white' ,
        boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px", 
        display : 'flex', 
        flexDirection : 'column', 
        padding : 25, 
        marginBottom :100, 
        marginRight : 10, 
        
    }, 
    title: {
        display : 'inline-block', 
        marginTop : 25, 
        // backgroundColor : 'red'
    }, 
    title1: {
        textAlign : 'center', 
    }, 
    CloseBtn : {
        display : 'flex', 
        justifyContent  : 'flex-end', 
        backgroundColor : 'transparent', 
        border : 'none', 
        fontSize : '25px', 
        cursor : 'pointer'
    }, 
    body : {
        flex: '50%', 
        display : 'flex', 
        justifyContent : 'center', 
        alignItems : 'center', 
        fontSize : '1.7rem', 
        textAlign : 'center', 
        // background : "grey"
    }, 
    footer : {
        flex : '20%', 
        display : 'flex', 
        justifyContent : 'center', 
        alignItems : 'center'
    }, 
    continue : {
        width : 150,
        height : 45, 
        margin: 10, 
        border : 'none', 
        background : 'cornflowerblue', 
        color : 'white',
        borderRadius : '8px', 
        fontSize : 20, 
        cursor : 'pointer'
    }, 
    cancel : {
        width : 150,
        height : 45, 
        margin: 10, 
        border : 'none', 
        background : 'red', 
        color : 'white',
        borderRadius : '8px', 
        fontSize : 20, 
        cursor : 'pointer'
    }, 
    


})

//gestion des styles de l'Updater
export const UpdaterStyles = ({
    Background: {
        // backgroundColor : 'black'
    },
    Container:{
        // backgroundColor : 'pink',
        padding : 10
    },
    UpdaterSubmitbtn : {
        width : 150,
        height : 45, 
        margin: 10, 
        border : 'none', 
        background : '#172554', 
        color : 'white',
        borderRadius : '8px', 
        fontSize : 20, 
        cursor : 'pointer'
    }, 
    input :{

        padding : 5, 
        borderRadius : 5, 
        border : "solid black 1px", 
    }
})

//gestion de style global AcceuilAdmin
export const AcceuilAdminStyle = ({
    dataSection : {
        // backgroundColor : 'grey', 
        width : '50%'
    }, 
    title1 : {
        textAlign : 'center', 
    }, 
    title2 : {
        textAlign: "center", 
        justifySelf: 'center',
        border : '1px solid black', 
        display : 'inline-block', 
        width : '100%', 
    }, 
    eachInfo: {
       
        padding: '10px', 
        margin : '5px',
        border : '1px solid black', 
       
    }, 
    td : {
        
    }
})
