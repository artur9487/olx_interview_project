/** @format */
import styles from '/styles/Style.module.scss';
import { Stack, Card, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ResultPage = () => {
	const router = useRouter();
	const path = router.query.slug;
	const [pageState] = useState(path === 'SuccesPageLogin' ? true : false);

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
				<Typography variant='h5' className={styles.succ}>
					Hello {router.query.user},
					{pageState
						? ' you have logged succesfully!'
						: ' you have signed succesfully!'}
				</Typography>
				<Button
					variant='outlined'
					color='inherit'
					sx={{ mt: 3 }}
					onClick={() => router.back()}>
					Go back to {pageState ? 'Login Page' : 'Sign Up Page'}
				</Button>
			</Card>
		</Stack>
	);
};

export default ResultPage;
