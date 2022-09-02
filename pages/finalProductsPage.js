/** @format */

import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Box, Stack } from '@mui/material';
import { Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import { filterProducts } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const FinalProductsPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { chosenProducts, user, category, lowCost, upperCost, specificValue } =
		useSelector((state) => state);

	useEffect(() => {
		dispatch(filterProducts);
	}, [dispatch]);

	return (
		<Layout>
			<Typography>Cześć {user}</Typography>
			<Typography>
				Z kategorii {category}, oraz podkategorii {specificValue}, w przedziale
				od {lowCost}zł do {upperCost}zł znaleźliśmy dla Ciebie poniższe
				propozycje:
			</Typography>
			{chosenProducts.length === 0 ? (
				<Typography>
					Zmień ustawienia wyszukiwania ponieważ nie odnaleźliśmy dopasowania
				</Typography>
			) : (
				chosenProducts.map((item) => {
					return (
						<Stack direction='row'>
							<Typography>
								Model: {item.type} {item.type1}{' '}
							</Typography>
							<Typography>Koszt: {item.cost}</Typography>
							<Typography>Stan: {item.type2}</Typography>
						</Stack>
					);
				})
			)}
			<Button onClick={() => router.back()}>Powrót</Button>
		</Layout>
	);
};

export default FinalProductsPage;
