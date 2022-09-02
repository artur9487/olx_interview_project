/** @format */
import styles from '/styles/Style.module.scss';
import { Stack, Card, Button, Typography, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const categories = [
	{
		type: 'Motoryzacja',
		bg: 'https://categories.olxcdn.com/assets/categories/olxpl/motoryzacja-5-2x.png',
		color: 'rgb(255, 206, 50)'
	},
	{
		type: 'Nieruchomosci',
		bg: 'https://categories.olxcdn.com/assets/categories/olxpl/nieruchomosci-3-2x.png',
		color: 'rgb(58, 119, 255)'
	},
	{
		type: 'Elektronika',
		bg: 'https://categories.olxcdn.com/assets/categories/olxpl/elektronika-99-2x.png',
		color: 'rgb(255, 246, 217)'
	}
];

const ResultPage = () => {
	const router = useRouter();
	const path = router.query.slug;
	const [pageState] = useState(path === 'SuccesPageLogin' ? true : false);
	const [category, setCategory] = useState('');

	return (
		<Layout>
			<Typography variant='h6' sx={{ color: 'black' }}>
				Hej {router.query.user},
				{pageState
					? ' you have logged succesfully!'
					: ' you have signed succesfully!'}
			</Typography>
			<Typography>
				Czym jesteś zainteresowany a my znajdziemy za Ciebie.
			</Typography>
			<Stack>
				<Typography textAlign='center'>Kategoria</Typography>
				<Grid
					container
					direction='row'
					columnGap={5}
					justifyContent='center'
					alignItems='center'>
					{categories.map((item) => {
						return (
							<Link href={`/category/${item.type}`}>
								<Grid
									onClick={() => {
										setCategory(item.type);
									}}
									sx={{ cursor: 'pointer' }}
									item>
									<Box
										sx={{
											margin: 'auto',
											position: 'relative',
											borderRadius: 100,
											width: 100,
											height: 100,
											bgcolor: item.color
										}}>
										{/*	<Image
											src={item.bg}
											objectFit='cover'
											layout='fill'
											alt='detail'
									/>*/}
									</Box>
									<Typography
										component='span'
										sx={{
											fontWeight: 1000,
											color: category === item.type ? 'white' : 'black',
											bgcolor: category === item.type ? 'black' : 'white'
										}}>
										{item.type}
									</Typography>
								</Grid>
							</Link>
						);
					})}
				</Grid>
			</Stack>
			<Button
				variant='outlined'
				color='inherit'
				sx={{ mt: 3 }}
				onClick={() => router.back()}>
				Go back to {pageState ? 'Login Page' : 'Sign Up Page'}
			</Button>
		</Layout>
	);
};

export default ResultPage;
