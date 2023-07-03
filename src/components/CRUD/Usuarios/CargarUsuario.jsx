import '../../../scss/components/CRUD/Usuarios/_cargarUsuario.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CargarUsuario({ handleVista }) {
	const { register, handleSubmit, setValue } = useForm({
		defaultValue: {
			apellido: '',
			nombre: '',
			nickname: '',
			password: '',
			email: '',
			telefono: '',
		},
	});

	const onSubmit = ({
		apellido,
		nombre,
		nickname,
		password,
		email,
		telefono,
	}) => {
		axios
			.post('https://api-onlygamers.herokuapp.com/api/usuarios', {
				apellido,
				nombre,
				nickname,
				password,
				email,
				telefono,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		handleVista('tabla');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='form-usuario'>
			<div className='form-inputs-contenedor'>
				{/* CAMPO APELLIDO */}
				<div className='contenedor-apellido'>
					<label className='apellido-label' from='apellido-input'>
						apellido
					</label>
					<input
						className='apellido-input'
						type='text'
						required
						{...register('apellido')}
						value={setValue('apellido')}></input>
				</div>

				{/* CAMPO NOMBRE */}
				<div className='contenedor-nombre'>
					<label className='nombre-label' from='nombre-input'>
						nombre
					</label>
					<input
						className='nombre-input'
						type='text'
						required
						{...register('nombre')}
						value={setValue('nombre')}></input>
				</div>

				{/* CAMPO NICKNAME */}
				<div className='contenedor-nickname'>
					<label className='nickname-label' from='nickname-input'>
						nickname
					</label>
					<input
						className='nickname-input'
						type='text'
						required
						{...register('nickname')}
						value={setValue('nickname')}></input>
				</div>

				{/* CAMPO PASSWORD */}
				<div className='contenedor-password'>
					<label className='password-label' from='password-input'>
						password
					</label>
					<input
						className='password-input'
						type='password'
						required
						{...register('password')}
						value={setValue('password')}></input>
				</div>

				{/* CAMPO EMAIL */}
				<div className='contenedor-email'>
					<label className='email-label' from='email-input'>
						email
					</label>
					<input
						className='email-input'
						type='email'
						required
						{...register('email')}
						value={setValue('email')}></input>
				</div>

				{/* CAMPO TELEFONO */}
				<div className='contenedor-telefono'>
					<label className='telefono-label' from='telefono-input'>
						telefono
					</label>
					<input
						className='telefono-input'
						type='number'
						required
						{...register('telefono')}
						value={setValue('telefono')}></input>
				</div>
			</div>

			<input className='boton-submit' type='submit' value='Cargar' />
		</form>
	);
}
