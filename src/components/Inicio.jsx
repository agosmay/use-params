import React from 'react';
import { Link } from 'react-router-dom';

const Inicio =()=> {
	return(
		<>
			<h1>Soy la pagina de Inicio</h1>
			<Link to="/show">Ir a show</Link>
		</>
	
	)
	
}

export default Inicio;