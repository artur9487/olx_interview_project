/** @format */
import { Card, Typography, Stack, Box, Button } from '@mui/material';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCategory, setFilterCredentials } from '../../redux/actions';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const obj = [
	{ type: 'Motoryzacja', values: ['saab,volvo'] },
	{
		type: 'Nieruchomosci',
		values: ['ponizej 30m2', 'powyzej 30m2']
	},
	{
		type: 'Elektronika',
		values: ['komorka', 'laptop']
	}
];

const CategoryPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const path = router.asPath.slice(10);
	const [costError, setCostError] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const handleSubmiter = (data) => {
		const { LowCost, UpperCost, SelectOption } = data;
		if (LowCost > UpperCost) {
			setCostError(true);
			return;
		} else {
			setCostError(false);
		}
		router.push('/finalProductsPage');
		return dispatch(
			setFilterCredentials(LowCost, UpperCost, SelectOption, path)
		);
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
							<p>{errors.LowCost?.message}</p>
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
							<p>{errors.UpperCost?.message}</p>
						</Stack>
					</Stack>
					<Stack direction='column'>
						{obj
							.filter((item) => {
								return item.type === path;
							})
							.map((item2, indx) => {
								return (
									<Box key={indx}>
										<label htmlFor='cost'>Wybierz {item2.choosingValue}</label>
										<select
											{...register('SelectOption', {
												required: {
													value: true,
													message: 'Position is required'
												}
											})}>
											<option>{item2.values[0]}</option>
											<option>{item2.values[1]}</option>
										</select>
									</Box>
								);
							})}
						<p>{errors.SelectOption?.message}</p>
					</Stack>
					{costError ? (
						<Typography>
							Wartość do nie może być niższa od wartości od{' '}
						</Typography>
					) : null}
					<input type='submit' value='Wyszukaj propozycje' />
				</Stack>
			</form>
			<Button onClick={() => router.back()}>Powrót</Button>
		</Layout>
	);
};

export default CategoryPage;
