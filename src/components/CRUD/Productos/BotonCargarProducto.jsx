import React from 'react';
import '../../../scss/components/CRUD/Productos/_botonCargarProducto.scss';

const BotonCargarProducto = ({ click }) => {
	return (
		<button type='button' className='boton-cargar-producto' onClick={click}>
			Cargar un nuevo producto
		</button>
	);
};

export default BotonCargarProducto;
