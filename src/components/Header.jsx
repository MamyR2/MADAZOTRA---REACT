import { Link } from 'react-router-dom'
import './styles/HeaderStyle.css'
import Timer from './timer'
import { House, HouseLine } from '@phosphor-icons/react'



function Header(){

    // gestion de la mise en page 

    const Styles ={
        header:{
            background: "#fff",
            display : "flex", 
            alignItems: "center",
            paddingRight: 100,
            padding: 4,
            width: "100%",
            height: 100,
            
        }, 
        logo:{
            width : 200, 
            height: 45,
        }, 
        logo1:{
            width : 100, 
            height : 100,
        },
        logoContainer:{
            width: "40%", 
            display: "flex", 
            justifyContent: "center",
            alignItems: 'center',
           
        }
    }
   
    //gesion des listes des élements sur le header
    const List = (props) => {
        return(
            props.name.map((name, i) => {
                return(
                    <Link to={"/"+name} className='eachList'>
                        <li className='list' key={i} style={props.style}>{name}</li>
                    </Link>
                    

                )
            })
        )
    }

    //comportement 



    return(
        
        <div style={Styles.header}>

            <div style={Styles.logoContainer}>
                    <img src={require('../assets/images/LOGO.png')} alt=""  style={Styles.logo1}/>

                    <img src={require('../assets/images/logo4.png')} alt=""  style={Styles.logo}/>
            </div>

            <div className='content'>
                <ul className='listItems'>
                    <Link to={'/'} className='homeLink'><HouseLine color='black' size={35} weight="fill"/></Link>
                    <List name={["gerer ma réservation", "admin"]}/>
                    
                    {/* <li><img className='icons' src={require('../assets/images/utilisateur.png')} alt="menu" /></li> */}
                </ul>

        
            </div>  

           
        </div>
        
    )

    
}

export default Header