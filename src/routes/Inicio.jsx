import React from 'react';
import '../scss/Routes/_inicio.scss';
// import Estadisticas from '../components/Estadisticas/Estadisticas';
import Footer from '../components/Mains/Footer';
import Header from '../components/Mains/Header';
import Nav from '../components/Mains/Nav';
import { Outlet } from 'react-router-dom';

const Inicio = () => {
	return (
		<div className='inicio' id='inicio'>
			<Header />
			{/* <Estadisticas /> */}

			<section className='sectionCRUD' id='sectionCRUD'>
				<Nav />
				<Outlet />
			</section>

			<Footer />
		</div>
	);
};

export default Inicio;
