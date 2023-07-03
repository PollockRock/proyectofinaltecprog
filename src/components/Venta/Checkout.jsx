import '../../scss/components/Venta/_checkout.scss';
import axios from 'axios';

function Checkout({ datosProductos, datosCliente, handleVista }) {
	function postear(datosProductos, datosCliente) {
		axios
			.post('http://localhost:3001/facturas', {
				datosProductos,
				datosCliente,
			})
			.then(function (response) {
				// console.log(response);
			})
			.catch(function (error) {
				// console.log(error);
			});
	}

	let total = 0;
	for (let producto of datosProductos) total += producto.venta * producto.cantidad;

	return (
		<div className='resumen-venta'>
			<div className='contenedor-resumen-venta'>
				<div className='datos-cliente'>
					<h3 className='titulo-cliente'>Datos del Cliente</h3>
					<ul className='contenedor-info-cliente'>
						<li>
							Nombre: <b>{datosCliente.nombre}</b>
						</li>
						<li>
							CUIT: <b>{datosCliente.cuit}</b>
						</li>
						<li>
							Domicilio: <b>{datosCliente.domicilioComercial}</b>
						</li>
						<li>
							Metodo de Pago: <b>{datosCliente.metodoDePago}</b>
						</li>
					</ul>
				</div>

				<div className='datos-productos'>
					<h3>Informacion de Producto/s</h3>
					{datosProductos.map((producto) => {
						return (
							<ul key={producto.id} className='contenedor-datos-productos'>
								<li>
									Descripcion: <b>{producto.nombre}</b>
								</li>
								<li>
									Categoria: <b>{producto.categoria}</b>
								</li>
								<li>
									Cantidad: <b>{producto.cantidad}</b>
								</li>
								<li>
									Precio Unitario:{' '}
									<b>
										$
										{new Intl.NumberFormat('es-ES', {
											style: 'currency',
											currency: 'ARS',
										}).format(producto.venta)}
									</b>{' '}
								</li>
								<li>
									Subtotal:{' '}
									<b>
										$
										{new Intl.NumberFormat('es-ES', {
											style: 'currency',
											currency: 'ARS',
										}).format(producto.venta * producto.cantidad)}
									</b>
								</li>
							</ul>
						);
					})}

					<ul className='contenedor-monto-total'>
						<li>
							Total: $
							<b>
								{new Intl.NumberFormat('es-ES', {
									style: 'currency',
									currency: 'ARS',
								}).format(total)}
							</b>
						</li>
					</ul>
				</div>
			</div>

			<button
				className='boton-checkout-confirmar'
				onClick={() => {
					postear(datosProductos, datosCliente);
					handleVista('facturacion');
				}}
			>
				Generar Factura
			</button>
		</div>
	);
}

export default Checkout;
