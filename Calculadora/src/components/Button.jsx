import React from 'react'
import './Button.css'
export default props=>{
    let classes = 'button '
    classes += props.operation ? 'operation' :''
    classes += props.double ? 'double' :''
    classes += props.ac ? 'ac' :''
    classes += props.disable ? 'disable' :''
    return(      
    <button 
    onClick={e=>props.click && props.click(props.Label)}
    className={classes}> 
    {props.Label}</button>
    )
}