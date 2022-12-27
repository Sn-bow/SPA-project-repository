import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Footer from './component/footer';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/footer" element={<Footer />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
