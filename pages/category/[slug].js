/** @format */
import { Card, Typography, Stack, Box } from '@mui/material';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCategory, setFilterCredentials } from '../../redux/actions';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const obj = [
	{ type: 'Motoryzacja', values: ['saab,volvo'], choosingValue: 'auto' },
	{
		type: 'Nieruchomości',
		values: ['poniżej 30m2', 'powyżej 30m2'],
		choosingValue: 'mieszkanie'
	},
	{
		type: 'Elektronika',
		values: ['komórka', 'laptop'],
		choosingValue: 'sprzęt'
	}
];

const CategoryPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const path = router.asPath.slice(10);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	useEffect(() => {
		dispatch(setCategory(path));
	}, [dispatch]);

	const handleSubmiter = (data) => {
		const { LowCost, UpperCost, SelectOption } = data;
		router.push('/finalProductsPage');
		return dispatch(setFilterCredentials(LowCost, UpperCost, SelectOption));
	};

	return (
		<Layout>
			<Typography textAlign='center'>Filtry</Typography>
			<form onSubmit={handleSubmit(handleSubmiter)}>
				<Stack direction='column' spacing={5}>
					<Stack direction='column'>
						<Typography>Cena:</Typography>
						<Stack direction='row' spacing={3}>
							<input
								{...register('LowCost', {
									required: { value: true, message: 'Position is required' },
									min: {
										value: 0,
										message: 'The value must be equall or bigger than 0'
									}
								})}
								type='number'
								placeholder='Od'
							/>
							{errors.LowCost?.message}
							<input
								{...register('UpperCost', {
									required: { value: true, message: 'Position is required' },
									min: {
										value: 0,
										message: 'The value must be equall or bigger than 0'
									}
								})}
								type='number'
								placeholder='Do'
							/>
							{errors.UpperCost?.message}
						</Stack>
					</Stack>
					<Stack direction='column'>
						{obj
							.filter((item) => item.type === path)
							.map((item2) => {
								return (
									<>
										<label htmlFor='cost'>Wybierz {item2.choosingValue}</label>
										<select
											{...register('SelectOption', {
												required: {
													value: true,
													message: 'Position is required'
												}
											})}
											name='cars'
											id='cars'>
											<option value={item2.values[0]}>Volvo</option>
											<option value={item2.values[1]}>Saab</option>
										</select>
									</>
								);
							})}
						{errors.SelectOption?.message}
					</Stack>
					<input type='button' value='Wyszukaj propozycje' />
				</Stack>
			</form>
		</Layout>
	);
};

export default CategoryPage;
