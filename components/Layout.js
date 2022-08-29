/** @format */
import { Stack, Card } from '@mui/material';

const Layout = ({ children }) => {
	return (
		<Stack
			sx={{ border: 1, width: '100vw', height: '100vh' }}
			direction='column'
			alignItems='center'
			justifyContent='center'>
			<Card
				variant='outlined'
				sx={{
					margin: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
					flexDirection: 'column'
				}}>
				{children}
			</Card>
		</Stack>
	);
};

export default Layout;
