import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../../scss/components/CRUD/Productos/_cargarProducto.scss';

export default function CargarProducto({ handleVista }) {
	const { register, handleSubmit, setValue } = useForm({
		defaultValue: {
			nombre: '',
			descripcion: '',
			stock: '',
			stockMinimo: '',
			compra: '',
			iva: '',
			utilidad: '',
			venta: '',
		},
	});

	const onSubmit = ({
		nombre,
		descripcion,
		stock,
		stockMinimo,
		compra,
		iva,
		utilidad,
		venta,
		categoria,
	}) => {
		axios
			.post('http://localhost:3001/productos', {
				nombre: nombre.toLowerCase(),
				descripcion: descripcion.toLowerCase(),
				stock,
				stockMinimo,
				compra,
				iva,
				utilidad,
				venta,
				categoria: categoria.toLowerCase(),
			})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		handleVista('tabla');
	};

	return (
		<form className='form-producto' onSubmit={handleSubmit(onSubmit)}>
			<div className='form-contenedor-inputs'>
				{/* CAMPO NOMBRE */}
				<div className='contenedor-nombre contenedor'>
					<label className='nombre-label' from='nombre-input'>
						producto
					</label>
					<input
						className='nombre-input'
						type='text'
						required
						{...register('nombre')}
						value={setValue('nombre')}
					></input>
				</div>

				{/* CAMPO DESCRIPCION */}
				<div className='contenedor-descripcion contenedor'>
					<label className='descripcion-label label' from='descripcion-input'>
						descripcion
					</label>
					<input
						className='descripcion-input'
						type='text'
						required
						{...register('descripcion')}
						value={setValue('descripcion')}
					></input>
				</div>

				{/* CAMPO STOCK */}
				<div className='contenedor-stock contenedor'>
					<label className='stock-label label' from='stock-input'>
						stock
					</label>
					<input
						className='stock-input'
						type='number'
						required
						{...register('stock')}
						value={setValue('stock')}
					></input>
				</div>

				{/* CAMPO STOCK MINIMO */}
				<div className='contenedor-stockMinimo contenedor'>
					<label className='stockMinimo-label label' from='stockMinimo-input'>
						stock minimo
					</label>
					<input
						className='stockMinimo-input'
						type='number'
						required
						{...register('stockMinimo')}
						value={setValue('stockMinimo')}
					></input>
				</div>

				{/* CAMPO COMPRA */}
				<div className='contenedor-compra contenedor'>
					<label className='contenedor-compra-label label' from='contenedor-compra-input'>
						compra
					</label>
					<input
						className='contenedor-compra-input'
						type='number'
						required
						{...register('compra')}
						value={setValue('compra')}
					></input>
				</div>

				{/* CAMPO IVA */}
				<div className='contenedor-iva contenedor'>
					<label className='iva-label label' from='iva-input'>
						iva
					</label>
					<input
						className='iva-input'
						type='number'
						required
						{...register('iva')}
						value={setValue('iva')}
					></input>
				</div>

				{/* CAMPO UTILIDAD */}
				<div className='contenedor-utilidad contenedor'>
					<label className='utilidad-label label' from='utilidad-input'>
						utilidad
					</label>
					<input
						className='utilidad-input'
						type='number'
						required
						{...register('utilidad')}
						value={setValue('utilidad')}
					></input>
				</div>

				{/* CAMPO VENTA */}
				<div className='contenedor-venta contenedor'>
					<label className='venta-label label' from='venta-input'>
						venta
					</label>
					<input
						className='venta-input'
						type='number'
						required
						{...register('venta')}
						value={setValue('venta')}
					></input>
				</div>

				{/* CAMPO CATEGORIA */}
				<div className='contenedor-categoria contenedor'>
					<label className='categoria-label label' from='categoria-input'>
						categoria
					</label>

					<select
						className='categoria-input'
						required
						{...register('categoria')}
						defaultValue={'DEFAULT'}
					>
						<option value='DEFAULT' disabled>
							Seleccionar una Categoría
						</option>
						<option>Consolas</option>
						<option>Hardware</option>
						<option>Notebooks</option>
						<option>Perifericos</option>
						<option>Videojuegos</option>
					</select>
				</div>
			</div>

			<input className='boton-submit' type='submit' value='Cargar Producto' />
		</form>
	);
}
