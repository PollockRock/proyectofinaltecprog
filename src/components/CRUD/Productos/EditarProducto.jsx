import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../../scss/components/CRUD/Productos/_editarProductos.scss';

export default function EditarProducto({ producto, handleVista }) {
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
			categoria: '',
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
			.put(`http://localhost:3001/productos/${producto.id}`, {
				nombre,
				descripcion,
				stock,
				stockMinimo,
				compra,
				iva,
				utilidad,
				venta,
				categoria,
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
		<form className='form-editar-producto' onSubmit={handleSubmit(onSubmit)}>
			<div className='form-inputs-contenedor'>
				{/* CAMPO NOMBRE */}
				<div className='contenedor-nombre contenedor'>
					<label className='nombre-label' from='nombre-input'>
						producto
					</label>
					<input
						className='nombre-input'
						type='text'
						{...register('nombre')}
						value={setValue('nombre', producto.nombre)}
					/>
				</div>

				{/* CAMPO DESCRIPCION */}
				<div className='contenedor-descripcion contenedor'>
					<label className='descripcion-label' from='descripcion-input'>
						descripcion
					</label>
					<input
						className='descripcion-input'
						type='text'
						{...register('descripcion')}
						value={setValue('descripcion', producto.descripcion)}
					></input>
				</div>

				{/* CAMPO STOCK */}
				<div className='contenedor-stock contenedor'>
					<label className='stock-label' from='stock-input'>
						stock
					</label>
					<input
						className='stock-input'
						type='number'
						{...register('stock')}
						value={setValue('stock', producto.stock)}
					></input>
				</div>

				{/* CAMPO STOCK MINIMO */}
				<div className='contenedor-stockMinimo contenedor'>
					<label className='stockMinimo-label' from='stockMinimo-input'>
						stock minimo
					</label>
					<input
						className='stockMinimo-input'
						type='number'
						{...register('stockMinimo')}
						value={setValue('stockMinimo', producto.stockMinimo)}
					></input>
				</div>

				{/* CAMPO COMPRA */}
				<div className='contenedor-compra contenedor'>
					<label className='contenedor-compra-label' from='contenedor-compra-input'>
						compra
					</label>
					<input
						className='contenedor-compra-input contenedor'
						type='number'
						{...register('compra')}
						value={setValue('compra', producto.compra)}
					></input>
				</div>

				{/* CAMPO IVA */}
				<div className='contenedor-iva contenedor'>
					<label className='iva-label' from='iva-input'>
						iva
					</label>
					<input
						className='iva-input'
						type='number'
						{...register('iva')}
						value={setValue('iva', producto.iva)}
					></input>
				</div>

				{/* CAMPO UTILIDAD */}
				<div className='contenedor-utilidad contenedor'>
					<label className='utilidad-label' from='utilidad-input'>
						utilidad
					</label>
					<input
						className='utilidad-input'
						type='number'
						{...register('utilidad')}
						value={setValue('utilidad', producto.utilidad)}
					></input>
				</div>

				{/* CAMPO VENTA */}
				<div className='contenedor-venta contenedor'>
					<label className='venta-label' from='venta-input'>
						venta
					</label>
					<input
						className='venta-input'
						type='number'
						{...register('venta')}
						value={setValue('venta', producto.venta)}
					></input>
				</div>

				{/* CAMPO CATEGORIA */}
				<div className='contenedor-categoria contenedor'>
					<label className='categoria-label' from='categoria-input'>
						categoria
					</label>

					<select
						className='categoria-input'
						{...register('categoria')}
						defaultValue={setValue('categoria', producto.categoria)}
					>
						{/* <option value='DEFAULT' disabled>
							Seleccionar una Categoría
						</option> */}
						<option>Consolas</option>
						<option>Hardware</option>
						<option>Notebooks</option>
						<option>Perifericos</option>
						<option>Videojuegos</option>
					</select>
				</div>
			</div>

			<input className='boton-submit' type='submit' value='Editar Producto' />
		</form>
	);
}
