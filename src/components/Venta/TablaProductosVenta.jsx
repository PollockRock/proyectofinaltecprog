import '../../scss/components/Venta/_tablaProductosVenta.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BiShoppingBag } from 'react-icons/bi';

const TablaProductosVenta = ({ handleProducto }) => {
	// const [cargarProductoCarrito, setCargarProductoCarrito] = useState();
	const [productos, setProductos] = useState([]);

	const endpoint = 'http://localhost:3001/productos';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			setProductos(data);
			// console.log(data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	// function enviarACarrito() {
	// 	handleProducto(cargarProductoCarrito);
	// }

	return (
		<table className='tabla-productos-venta'>
			<thead>
				<tr>
					<th className='id-column'>ID</th>
					<th className='nombre-column text'>nombre</th>
					<th className='descripcion-column text'>descripcion</th>
					<th className='categoria-column text'>categoria</th>
					<th className='stock-column num'>stock</th>
					<th className='venta-column num'>venta</th>
				</tr>
			</thead>

			<tbody>
				{productos.map((producto, index) => (
					<tr
						key={producto.id}
						style={
							producto.stock === 0
								? {
										backgroundColor: 'var(--rojo-suave)',
										color: 'var(--gris-medio)',
								  }
								: producto.stock < producto.stockMinimo
								? {
										backgroundColor: 'var(--yellow)',
										color: 'var(--rojo-suave)',
								  }
								: null
						}
					>
						<td className='id-column'>{index + 1}</td>
						{/* // id obtenido de la iteracion del .map, el id original para metodos es a traves de mongo */}
						<td className='nombre-column'>{producto.nombre}</td>
						<td className='descripcion-column'>{producto.descripcion}</td>
						<td className='categoria-column'>{producto.categoria}</td>
						<td
							className='stock-column num'
							style={
								producto.stock === 0
									? {
											color: 'var(--gris-medio)',
											// fontWeight: 'bold',
											fontSize: '17px',
									  }
									: producto.stock < producto.stockMinimo
									? {
											color: 'var(--rojo-suave)',
											// fontWeight: 'bold',
											fontSize: '17px',
									  }
									: null
							}
						>
							{producto.stock}
						</td>
						<td className='venta-column num'>
							$
							{new Intl.NumberFormat('es-ES', {
								style: 'currency',
								currency: 'ARS',
							}).format(producto.venta)}
						</td>

						{/* BUTTONS */}

						<td className='boton-column'>
							<button
								className={`boton-agregar${
									producto.stock < 1
										? ' desactivado'
										: producto.stock < producto.stockMinimo
										? ' alerta'
										: ' activo'
								}`}
								onClick={() => {
									handleProducto(producto);
								}}
								disabled={producto.stock < 1}
							>
								<BiShoppingBag size='35px' color='green' />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TablaProductosVenta;
