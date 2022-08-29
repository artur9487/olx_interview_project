/** @format */
import { Box, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import SocialMediaComp from './SocialMediaComp';
import styles from '/styles/Style.module.scss';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const LoginComp = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		router.push({
			pathname: '/succesPage/SuccesPageLogin',
			query: { user: data.LoginInEmail }
		});
		dispatch(setUser(data.LoginInEmail));
	};

	return (
		<Box sx={{ px: 3, py: 3 }}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Stack direction='column' sx={{ py: 2 }} spacing={2}>
					<Stack direction='column' sx={{ width: '100%' }}>
						<label htmlFor='LoginEmail'>Email:</label>
						<InputComp
							{...register('LoginInEmail', {
								required: { value: true, message: 'Email is required' },
								minLength: {
									value: 6,
									message: 'The value must be at least 6 characters long'
								},
								pattern: {
									value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									message: 'The email must have a right pattern'
								}
							})}
							className={styles.input1}
							type='text'
							error={errors.LoginInEmail}
						/>
						<div className={styles.errText}>{errors.LoginInEmail?.message}</div>
					</Stack>
					<Stack direction='column' sx={{ width: '100%' }}>
						<label htmlFor='SignInPassword'>Hasło:</label>
						<InputComp
							{...register('SignInPassword', {
								required: { value: true, message: 'Password is required' },
								minLength: {
									value: 6,
									message: 'The password must be at least 6 characters long'
								}
							})}
							className={styles.input1}
							type='password'
							error={errors.SignInPassword}
						/>
						<div className={styles.errText}>
							{errors.SignInPassword?.message}
						</div>
					</Stack>
					<Box>Nie pamiętasz hasła?</Box>
					<input className={styles.submitInput} type='submit' value='Zaloguj' />
				</Stack>
			</form>

			<Stack
				alignItems='center'
				justifyContent='center'
				direction='row'
				sx={{ width: '100%' }}>
				<Box
					sx={{
						border: 1,
						width: '30%',
						height: 1,
						borderColor: 'rgb(216, 223, 224)'
					}}
				/>
				<Box sx={{ px: 3 }}>Lub</Box>
				<Box
					sx={{
						border: 1,
						width: '30%',
						height: 1,
						borderColor: 'rgb(216, 223, 224)'
					}}
				/>
			</Stack>

			<SocialMediaComp />
			<Typography textAlign='center' fontSize={10} sx={{ p: 3 }}>
				Logując się, akceptujesz regulamin serwisu OLX.pl w jego aktualnym
				brzmieniu.
			</Typography>
		</Box>
	);
};

const InputComp = styled.input`
	background-color: grey;
	position: relative;
	padding: 10px;
	width: 100%;
	background-color: rgb(242, 244, 245);
	border: 0px;
	line-height: 18px;
	&:focus {
		border-bottom: ${(props) =>
			props.error ? '2px solid red ' : '2px solid black '};
		outline: none;
	}
`;

export default LoginComp;
