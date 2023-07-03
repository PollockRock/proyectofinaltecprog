import '../../scss/components/Venta/_facturacion.scss';

const Facturacion = ({ datosProductos, datosCliente, handleVista }) => {
	let onlyDevs = {
		nombre: 'Yoris Gonzalo',
		cuit: '12345678910',
		provincia: 'Tucuman',
		domicilioComercial: 'Jose Cuervo 666',
	};

	let total = 0;
	for (let producto of datosProductos) total += producto.venta * producto.cantidad;

	return (
		<section className='cliente-factura'>
			<p>ORIGINAL</p>
			<h1>{datosCliente.tipoFactura}</h1>
			<p>{Math.floor(Math.random() * 100000000000)}</p>

			<section className='datos-vendedores-contenedor contenedor'>
				<ul>
					<li>
						Razon Social: <b>{onlyDevs.nombre}</b>
					</li>
					<li>
						CUIT: <b>{onlyDevs.cuit}</b>
					</li>
					<li>
						Provincia: <b>{onlyDevs.provincia}</b>
					</li>
					<li>
						Domicilio Comercial: <b>{onlyDevs.domicilioComercial}</b>
					</li>
				</ul>
			</section>

			<section className='datos-cliente-contenedor contenedor'>
				<li>
					Condición frenta al IVA: <b>{datosCliente.razonSocial}</b>
				</li>
				<ul>
					<li>
						Apellido y Nombre / Razón Social: <b>{datosCliente.nombre}</b>
					</li>
					<li>
						CUIT: <b>{datosCliente.cuit}</b>
					</li>
					<li>
						Provincia: <b>{datosCliente.provincia}</b>
					</li>
					<li>
						Domicilio Comercial: <b>{datosCliente.domicilioComercial}</b>
					</li>
				</ul>
			</section>

			<section className='datos-productos'>
				<table className='tabla-productos-factura'>
					<thead>
						<tr>
							<th className='id-column num'>ID</th>
							<th className='nombre-column text'>Nombre</th>
							<th className='cantidad-column num'>Cantidad</th>
							<th className='precio-siniva-column num'>Precio S/IVA</th>
							<th className='iva-column num'>IVA</th>
							<th className='precio-coniva-column num'>Precio C/IVA</th>
							<th className='subtotal-column num'>SubTotal</th>
						</tr>
					</thead>

					<tbody>
						{datosProductos.map((producto, index) => (
							<tr key={producto.id}>
								<td className='id-column'>{producto.id}</td>
								<td className='nombre-column'>{producto.nombre}</td>
								<td className='cantidad-column num'>{producto.cantidad}</td>
								<td className='precio-siniva-column num'>
									$
									{new Intl.NumberFormat('es-ES', {
										style: 'currency',
										currency: 'ARS',
									}).format(parseFloat(producto.venta - producto.venta * 0.21))}
								</td>
								<td className='iva-column num'>{producto.iva}%</td>
								<td className='precio-coniva-column num'>
									$
									{new Intl.NumberFormat('es-ES', {
										style: 'currency',
										currency: 'ARS',
									}).format(producto.venta)}
								</td>
								<td className='subtotal-column num'>
									${producto.venta * producto.cantidad}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<p className='precio-total'>
					Total:{' '}
					<b>
						$
						{new Intl.NumberFormat('es-ES', {
							style: 'currency',
							currency: 'ARS',
						}).format(total)}
					</b>
				</p>
			</section>
		</section>
	);
};

export default Facturacion;
