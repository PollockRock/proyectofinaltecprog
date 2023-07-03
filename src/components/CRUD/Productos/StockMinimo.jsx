import { useEffect, useState } from 'react';
import '../../../scss/components/CRUD/_stockMinimo.scss';
import axios from 'axios';

export default function StockMinimo() {
	const [alertaStock, setAlertaStock] = useState([]);
	const [productos, setProductos] = useState([]);

	const endpoint = 'http://localhost:3001/productos';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			setProductos(data);
		});
	};

	useEffect(() => {
		getData();
	}, [productos]);

	useEffect(() => {
		axios.get(endpoint).then(({ data }) => {
			let prevAlertaStock = [];

			for (let producto of data) {
				if (producto.stock < producto.stockMinimo) prevAlertaStock.push(producto);
			}

			setAlertaStock(prevAlertaStock);
		});
	}, []);

	return (
		<>
			{alertaStock ? (
				<section className='stock-minimo'>
					<h2 className='stock-minimo-titulo'>¡Alerta de Stock!</h2>

					{/* <hr /> */}

					<div className='contenedor-productos-stock-minimo'>
						{alertaStock.map((producto) => {
							return (
								<div key={producto.id} className='contenedor-producto-bajo-stock'>
									<h4 className='titulo-producto'>{producto.nombre}</h4>
									<p className='texto-producto producto-stock-minimo'>
										Stock Mínimo: <b>{producto.stockMinimo}</b>
									</p>
									<p className='texto-producto producto-stock-actual'>
										Stock Actual: <b>{producto.stock}</b>
									</p>
								</div>
							);
						})}
					</div>
				</section>
			) : null}
		</>
	);
}
