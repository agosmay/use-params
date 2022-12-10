import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Show from '../components/Show';
import Inicio from '../components/Inicio';
import Card from '../components/Card';


export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Inicio />}
				/>
				<Route
					path="/show"
					element={<Show />}
				/>
				<Route
					path="/show/:id"
					element={<Card />}
				/>
			</Routes>
		</BrowserRouter>
		
	
	
	);
}