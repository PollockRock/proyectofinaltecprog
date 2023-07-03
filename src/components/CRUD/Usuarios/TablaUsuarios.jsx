import React, { useEffect, useState } from 'react';
import '../../../scss/components/CRUD/Usuarios/_tablaUsuarios.scss';
import axios from 'axios';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi';

const TablaUsuarios = ({ handleUsuario, handleVista, handleEliminarUsuario }) => {
	const [usuarios, setUsuarios] = useState([]);

	const endpoint = 'https://api-onlygamers.herokuapp.com/api/usuarios';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			setUsuarios(data);
		});
	};

	useEffect(() => {
		getData();
	}, [usuarios]);

	function confirmacionEliminacionUsuario(usuarioAEliminar) {
		handleEliminarUsuario(usuarioAEliminar, eliminarUsuario);
	}

	function eliminarUsuario(usuarioAEliminar) {
		axios.delete(endpoint + '/' + usuarioAEliminar).then((deleted) => {
			axios.get(endpoint).then((response) => {
				getData();
			});
		});
	}

	function editarUsuario(usuarioAEditar) {
		handleUsuario(usuarioAEditar);
		handleVista('editar');
	}

	return (
		<table className='tabla-usuarios'>
			<thead>
				<tr>
					<th className='nombre-column text'>Nombre</th>
					<th className='apellido-column text'>Apellido</th>
					<th className='nickname-column text'>Nickname</th>
					<th className='email-column text'>Email</th>
					<th className='telefono-column num'>Telefono</th>
				</tr>
			</thead>

			<tbody>
				{usuarios.map((usuario) => (
					<tr key={usuario.id}>
						<td>{usuario.nombre}</td>
						<td>{usuario.apellido}</td>
						<td>{usuario.nickname}</td>
						<td>{usuario.email}</td>
						<td className='num'>{usuario.telefono}</td>

						<td className='boton-column'>
							<button className='boton-editar' onClick={() => editarUsuario(usuario)}>
								<BiEditAlt />
							</button>
						</td>

						<td className='boton-column'>
							<button
								className='boton-eliminar'
								onClick={() => confirmacionEliminacionUsuario(usuario)}
							>
								<BiTrashAlt />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TablaUsuarios;
