import '../components/styles/Modalstyles.css'
const Modal = ({closeModal, title, Component}) => {
    return (

        <div className='modalBackground'>
             <div className='modalContainer'>
                <button onClick={() => closeModal(false)} className='CloseBtn'>X</button>
                <div className='title'>
                    <h1 className='title1'>{title}</h1>
                </div>
                <div className='body'>
                    {Component}
                </div>
                <div className='footer'>
                    {/* <button style={Modalstyles.cancel}>Cancel </button>
                    <button style={Modalstyles.continue}>Continue </button> */}
                </div>
            </div>
        </div>
      )
}

export default Modal