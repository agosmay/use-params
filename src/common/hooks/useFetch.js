import React, { useState , useEffect } from 'react';
import axios from 'axios';


export const useFetch = (url) => {
	
	const [datos, setDatos] = useState([])
	const [error, setError] = useState(null)
	const [isLoading , setIsLoading] = useState(true)
	
	
	const fetchingData = async () => {
		try {
			const res = await axios(url)
			setDatos(res.data)
			
		}catch(err) {
			setError(true);
			
		}finally {
			setIsLoading(false);
		}
		
	}
	
	useEffect(()=> {
		fetchingData();
		
	},[])
	
	
	
	
	
	
	return { datos, error , isLoading };
	
	
	
}