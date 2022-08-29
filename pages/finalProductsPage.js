/** @format */

import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Box } from '@mui/material';

const FinalProductsPage = () => {
	const data = useSelector((state) => state);
	const { upperCost, category, user } = data;
	return (
		<>
			<Layout>
				<Box></Box>
			</Layout>
		</>
	);
};

export default FinalProductsPage;
