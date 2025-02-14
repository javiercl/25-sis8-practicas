import React from 'react';
import './numeros.css';

function Numeros(props){
    const nums = ['7','8','9','*','4','5','6','/','1','2','3','+','00','0','.','-']; 

    const lista_elems = nums.map( (num) => 
        <div className='tecla'>{num}</div>
    );

    return (    
     <div className='contenedor_numeros'>
        { lista_elems }
     </div>
    );
}

export default Numeros;