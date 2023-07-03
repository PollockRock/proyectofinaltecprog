import { useState } from 'react';
import { BiTrashAlt, BiPlus, BiMinus } from 'react-icons/bi';
import '../../scss/components/Venta/_carritoCompra.scss';

export default function CarritoProductos({ productos, handleVista, handleProductoFinal }) {
	let productosSeleccionados = [...new Set(productos)];

	// console.log(productosSeleccionados);

	// eslint-disable-next-line
	const [carritoProductos, setCarritoProductos] = useState([]);

	// useEffect(() => {}, [productosSeleccionados]);

	function sumarProducto(producto) {
		const i = productosSeleccionados.indexOf(producto);

		if (producto.cantidad < producto.stock) {
			productosSeleccionados[i].cantidad++;

			return setCarritoProductos(productosSeleccionados);
		}
	}

	function restarProducto(producto) {
		const i = productosSeleccionados.indexOf(producto);

		if (producto.cantidad > 1) {
			productosSeleccionados[i].cantidad--;

			return setCarritoProductos(productosSeleccionados);
		}
	}

	// function eliminarProducto(producto) {
	// 	const i = productosSeleccionados.indexOf(producto);
	// 	productosSeleccionados.splice(i, 1);

	// 	return setCarritoProductos(productosSeleccionados);
	// }





	return (
		<section className='carrito-compra'>
			<h2 className='carrito-compra-titulo'>Carrito compras</h2>

			{productosSeleccionados.length === 0 && (
				<h4 className='carrito-compra-aviso'>Elija sus productos</h4>
			)}

			<div className='carrito-compra-contenedor-productos'>
				{productosSeleccionados.map((producto) => {
					return (
						<div key={producto.id} className='contenedor-producto'>
							<h4 className='titulo-producto'>{producto.nombre}</h4>

							<p className='texto-producto producto-precio'>
								Precio:{' '}
								<b>
									$
									{new Intl.NumberFormat('es-ES', {
										style: 'currency',
										currency: 'ARS',
									}).format(producto.venta)}
								</b>
							</p>
							<p className='texto-producto producto-cantidad'>
								Cantidad: <b>{producto.cantidad}</b>
							</p>

							<div className='contenedor-botones'>
								<div className='botones-cantidad'>
									<button
										className='boton-agregar'
										onClick={() => sumarProducto(producto)}
									>
										<BiPlus />
									</button>

									<button
										className='boton-restar'
										onClick={() => restarProducto(producto)}
									>
										<BiMinus />
									</button>
								</div>

								{/* <button
									className='boton-eliminar'
									onClick={() => eliminarProducto(producto)}
								>
									<BiTrashAlt />
								</button> */}
							</div>
						</div>
					);
				})}
			</div>

			{productosSeleccionados.length > 0 && (
				<button
					type='button'
					className='carrito-compra-boton-comprar'
					onClick={() => {
						handleVista('formulario');
						handleProductoFinal(productosSeleccionados);
					}}
				>
					Comprar
				</button>
			)}
		</section>
	);
}
