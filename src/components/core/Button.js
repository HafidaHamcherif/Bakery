import React from 'react';

const Button = (props) => {
    console.log('Button/props',props);

    return(
        <button
            className= "btn btn-outline-primary"
            onClick={props.onClick}>
            {props.children}
            {props.isSelected}
            </button>
    );
}
 
export default Button;