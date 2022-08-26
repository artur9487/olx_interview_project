/** @format */
import { Box, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import SocialMediaComp from './SocialMediaComp';
import styles from '/styles/Style.module.scss';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const SignComp = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		router.push({
			pathname: '/SuccesPageSignIn',
			query: { user: data.SignInEmail }
		});
	};
	return (
		<Box sx={{ p: 3 }}>
			<SocialMediaComp />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Stack direction='column' sx={{ py: 2 }} spacing={2}>
					<Stack direction='column' sx={{ width: '100%' }}>
						<label htmlFor='SignInEmail'>Email:</label>
						<InputComp
							{...register('SignInEmail', {
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
							type='text'
							error={errors.SignInEmail}
						/>
						<div className={styles.errText}>{errors.SignInEmail?.message}</div>
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

					<Typography fontSize={10}>
						Klikając “Załóż konto”, akceptuję Regulamin serwisu OLX Przyjmuję do
						wiadomości, że OLX wykorzystuje moje dane osobowe zgodnie z Polityką
						prywatności oraz Polityką dotyczącą plików cookie i podobnych
						technologii. OLX wykorzystuje zautomatyzowane systemy i partnerów do
						analizowania, w jaki sposób korzystam z usług w celu zapewnienia
						odpowiedniej funkcjonalności produktu, treści, dostosowanych i
						opartych na zainteresowaniach reklam, jak również ochrony przed
						spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z
						naszych usług.
					</Typography>
					<Stack spacing={1} direction='row'>
						<Box>
							<input
								{...register('RegistrationTerms', {
									required: { value: true, message: 'You must agree the terms' }
								})}
								className={styles.input}
								type='checkbox'
								value='Registration terms'
							/>
						</Box>

						<Typography fontSize={10}>
							Wyrażam zgodę na używanie przez Grupę OLX sp. z o.o. środków
							komunikacji elektronicznej oraz telekomunikacyjnych urządzeń
							końcowych w celu przesyłania mi informacji handlowych oraz
							prowadzenia marketingu (np. newsletter, wiadomości SMS) przez
							Grupę OLX sp. z o.o., podmioty powiązane i partnerów biznesowych.
							Moja zgoda obejmuje numery telefonów i adresy e-mail
							wykorzystywane podczas korzystania z usług Grupy OLX Sp. z o.o.
							Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za
							pomocą odpowiednich ustawień konta lub zgłaszając nam takie
							żądanie.
						</Typography>
					</Stack>
					<div className={styles.errText}>
						{errors.RegistrationTerms?.message}
					</div>
					<input
						className={styles.submitInput}
						type='submit'
						value='Zarejestruj'
					/>
				</Stack>
			</form>
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

export default SignComp;
