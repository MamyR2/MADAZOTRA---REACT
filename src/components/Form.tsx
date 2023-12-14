import React from "react";

type formProps = {
    type : string,
    label : string,
    placeholder : string, 
    value, 
    onChange,
}

function Form (props : formProps){
    return(
        <div>
            <span>{props.label}</span> <br />
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            
        </div>
        
    )
}

export default Form; 