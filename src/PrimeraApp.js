import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';

// FC
const PrimeraApp = ({saludo, subtitulo}) => {

    // if(!saludo) {
    //     throw new Error ('El saludo es necesario')
    // }
    
    return ( 
        <>
            <h1>{saludo}!!!</h1>
            {/* <h1>{JSON.stringify(saludo)}</h1> */}
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    // otra: PropTypes.number       
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;