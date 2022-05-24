import React, { useState } from 'react';
import PropTypes  from 'prop-types';

const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ]= useState( value ); //retorna un arreglo
    
    // handleAdd
    const handleAdd = () => {
        //setCounter( counter + 1 );
        setCounter( (c) => c +1 );
    }
     //const handleSubstract = () => setCounter ( counter -1);

    //const handleReset = () => setCounter ( value)

    return (
         <>
            <h1>CounterApp</h1>
            <p> { counter } </p>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ ()=> setCounter ( value )}>Reset</button>
            <button onClick={ ()=> setCounter( counter -1 )}>-1</button>
         </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number

}

export default CounterApp;