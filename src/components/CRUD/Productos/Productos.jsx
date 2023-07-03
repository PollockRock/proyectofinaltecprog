import React, { useState } from 'react';
import '../../../scss/components/CRUD/Productos/_productos.scss';
import '../../../scss/components/CRUD/Productos/_eliminarProducto.scss';
import CargarProducto from './CargarProducto';
import TablaProductos from './TablaProductos';
import EditarProducto from './EditarProducto';
import StockMinimo from './StockMinimo';
import { BiArrowBack, BiAddToQueue, BiEditAlt, BiTrashAlt } from 'react-icons/bi';

const Productos = () => {
	const [vista, setVista] = useState('tabla');
	// valores = 'tabla', 'cargar', 'editar', 'eliminar'

	const [editarProducto, setEditarProducto] = useState({});
	const [productoEliminar, setProductoEliminar] = useState({});

	const handleVista = (nombrevista) => {
		setVista(nombrevista);
	};

	const handleProducto = (productoAEditar) => {
		setEditarProducto(productoAEditar);
	};

	const handleEliminar = ({ id, nombre, descripcion }, method) => {
		setProductoEliminar({ id, nombre, descripcion, method });
		setVista('eliminar');
	};

	const confirmarEliminacion = (idProductoAEliminar) => {
		productoEliminar.method(idProductoAEliminar);
		setVista('tabla');
	};

	return (
		<section id='productos' className='productos'>
			{/* VISTA PRODUCTO */}
			<div className='contenedor-vista-producto'>
				<StockMinimo />
				<button
					className='boton boton-cargar-producto'
					type='button'
					onClick={() => handleVista('cargar')}
				>
					<BiAddToQueue color='white' />
					Cargar Producto
				</button>
				<div className='contendor-tabla'>
					<TablaProductos
						handleProducto={handleProducto}
						handleVista={handleVista}
						handleEliminar={handleEliminar}
					/>
				</div>
			</div>

			{/* VISTA CARGAR PRODUCTO */}
			<div
				className={
					vista === 'cargar'
						? 'contenedor-vista-cargar-producto active'
						: 'contenedor-vista-cargar-producto'
				}
			>
				<div className='header-agregar-producto'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>{<BiAddToQueue color='gray' />} Cargar Producto</h2>
				</div>
				<CargarProducto handleVista={handleVista} />
			</div>

			{/* VISTA EDITAR PRODUCTO */}
			<div
				className={
					vista === 'editar'
						? 'contenedor-vista-editar-producto active'
						: 'contenedor-vista-editar-producto'
				}
			>
				<div className='header-editar-producto'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>{<BiEditAlt color='gray' />} Editar Producto</h2>
				</div>

				<EditarProducto producto={editarProducto} handleVista={handleVista} />
			</div>

			{/* VISTA ELIMINAR */}

			<div
				className={
					vista === 'eliminar'
						? 'contenedor-vista-eliminar-producto active'
						: 'contenedor-vista-eliminar-producto'
				}
			>
				<div className='header-eliminar-producto'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>
						{<BiTrashAlt color='gray' />} ¿Eliminar Producto?
					</h2>
				</div>

				<div className='contenido-eliminar'>
					<h3 className='texto-producto-eliminar'>{productoEliminar.nombre}</h3>
					<p className='texto-producto-eliminar'>{productoEliminar.descripcion}</p>

					<div className='contenedor-botones-eliminar'>
						<button
							className='boton-eliminar si'
							onClick={() => confirmarEliminacion(productoEliminar.id)}
						>
							Si
						</button>

						<button className='boton-eliminar no' onClick={() => setVista('tabla')}>
							No
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Productos;
