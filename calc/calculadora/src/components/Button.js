import React from 'react';

import './Button.css';


function Button (props){
    return <button className='botao' onClick={e => props.clicar(props.valor)}>
    {props.valor}
</button>

}
export default Button;