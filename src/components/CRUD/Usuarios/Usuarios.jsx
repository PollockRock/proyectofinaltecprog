import React, { useState } from 'react';
import '../../../scss/components/CRUD/Usuarios/_usuarios.scss';
import '../../../scss/components/CRUD/Usuarios/_eliminarUsuario.scss';
import CargarUsuario from './CargarUsuario';
import TablaUsuarios from './TablaUsuarios';
import EditarUsuario from './EditarUsuario';
import { BiArrowBack, BiAddToQueue, BiEditAlt, BiTrashAlt } from 'react-icons/bi';

const Usuarios = () => {
	const [vista, setVista] = useState('tabla');
	// valores = 'tabla', 'cargar', 'editar', 'eliminar'

	const [editarUsuario, setEditarUsuario] = useState({});
	const [usuarioEliminar, setUsuarioEliminar] = useState({});

	const handleVista = (nombrevista) => {
		setVista(nombrevista);
	};

	const handleUsuario = (usuarioAEditar) => {
		setEditarUsuario(usuarioAEditar);
	};

	const handleEliminarUsuario = ({ id, nombre, apellido, email, nickname }, method) => {
		setUsuarioEliminar({ id, nombre, apellido, email, nickname, method });
		setVista('eliminar');
		console.log(vista);
		console.log(usuarioEliminar);
	};

	const confirmarEliminacion = (idUsuarioAEliminar) => {
		usuarioEliminar.method(idUsuarioAEliminar);
		setVista('tabla');
	};

	return (
		<section id='usuarios' className='usuarios'>
			{/* VISTA USUARIO */}
			<div className='contenedor-vista-usuario'>
				<button
					className='boton boton-cargar-usuario'
					type='button'
					onClick={() => handleVista('cargar')}
				>
					<BiAddToQueue color='white' />
					Cargar Usuario
				</button>

				<div className='contenedor-tabla'>
					<TablaUsuarios
						handleUsuario={handleUsuario}
						handleVista={handleVista}
						handleEliminarUsuario={handleEliminarUsuario}
					/>
				</div>
			</div>

			{/* VISTA CARGAR USUARIO */}
			<div
				className={
					vista === 'cargar'
						? 'contenedor-vista-cargar-usuario active'
						: 'contenedor-vista-cargar-usuario'
				}
			>
				<div className='header-agregar-usuario'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>{<BiAddToQueue color='gray' />} Cargar Usuario</h2>
				</div>
				<CargarUsuario handleVista={handleVista} />
			</div>

			{/* VISTA EDITAR Usuario */}
			<div
				className={
					vista === 'editar'
						? 'contenedor-vista-editar-usuario active'
						: 'contenedor-vista-editar-usuario'
				}
			>
				<div className='header-editar-usuario'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>{<BiEditAlt color='gray' />} Editar Usuario</h2>
				</div>

				<EditarUsuario usuario={editarUsuario} handleVista={handleVista} />
			</div>

			{/* VISTA ELIMINAR */}

			<div
				className={
					vista === 'eliminar'
						? 'contenedor-vista-eliminar-usuario active'
						: 'contenedor-vista-eliminar-usuario'
				}
			>
				<div className='header-eliminar-usuario'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						<BiArrowBack color='white' type='solid' />
					</button>

					<h2 className='form-titulo'>
						{<BiTrashAlt color='gray' />} ¿Eliminar Usuario?
					</h2>
				</div>

				<div className='contenido-eliminar'>
					<h3 className='texto-usuario-eliminar'>
						{usuarioEliminar.nombre} {usuarioEliminar.apellido}
					</h3>
					<p className='texto-usuario-eliminar'>{usuarioEliminar.nickname}</p>

					<div className='contenedor-botones-eliminar'>
						<button
							className='boton-eliminar si'
							onClick={() => confirmarEliminacion(usuarioEliminar.id)}
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

export default Usuarios;
