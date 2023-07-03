import { useEffect, useState } from 'react';

export default function TipoFactura({
	facturaTipoPADRE,
	setFacturaTipoPADRE,
	razonSocialPADRE,
	setRazonSocialPADRE,
}) {
	const [razonSocial, setRazonSocial] = useState('consumidorFinal');

	const handleRazonSocial = (e) => {
		setRazonSocial(e.target.value);
	};

	useEffect(() => {
		handleTipoFactura(razonSocial);
	}, [razonSocial]);

	const handleTipoFactura = (e) => {
		if (razonSocial === 'responsableInscripto') {
			setRazonSocialPADRE('responsableInscripto');
			setFacturaTipoPADRE('a');
		}
		if (razonSocial === 'monotributista') {
			setRazonSocialPADRE('monotributista');
			setFacturaTipoPADRE('b');
		}
		if (razonSocial === 'consumidorFinal') {
			setRazonSocialPADRE('consumidorFinal');
			setFacturaTipoPADRE('b');
		}
	};

	return (
		<div className='contenedor-razon-social'>
			<div className='opciones-razon-social'>
				<label className='razon-social-label' form='razon-social-select'>
					razon social
				</label>
				<select
					className='razon-social-select'
					onChange={handleRazonSocial}
					defaultValue='consumidorFinal'
				>
					<option value='responsableInscripto'>Responsable Inscripto</option>
					<option value='monotributista'>Monotributista</option>
					<option value='consumidorFinal'>Consumidor Final</option>
				</select>
			</div>

			<label className='tipoDeFactura-label'>factura tipo: {facturaTipoPADRE}</label>
		</div>
	);
}
