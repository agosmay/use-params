import React from 'react';
import { useFetch } from '../common/hooks/useFetch';
import { urlGeneral } from '../services/urlGeneral';
import { Link } from 'react-router-dom';

const Show = () => {
	
	const { datos, error , isLoading } = useFetch(urlGeneral);
	
	
	return (
		<>
			<Link to="/">Volver al inicio</Link>
			<h1>Aqui se mostrara el show</h1>
			<ul>
			{
				datos.map((post)=> (
					<li key={post.id}><a href={`/show/${post.id}`}>{post.title}</a></li>
				
				))
			}
			</ul>
		</>
	);
}

export default Show;