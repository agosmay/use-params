import React from 'react';
import { Link ,  useParams } from 'react-router-dom';
import { useFetch } from '../common/hooks/useFetch';
import { urlGeneral } from '../services/urlGeneral';




const Card  = () => {
	
	const { id } = useParams();
	

	
	const { datos: posteos, error , isLoading } = useFetch(`${urlGeneral}/${id}`);
	

	
		return(
		<>
			<h1>Soy la Card numero ...</h1>
			<h1>{posteos.id}</h1>
			<h1>{posteos.title}</h1>
			<h1>{posteos.body}</h1>
			<h1>The user who posted was user number: {posteos.userId}</h1>
			<Link to="/show">Volver a show</Link>
		</>
	
	)
}

export default Card;