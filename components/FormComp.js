/** @format */
import { useState, useRef, useLayoutEffect } from 'react';
import { Stack, Box, Button } from '@mui/material';
import SignComp from './SignComp';
import LoginComp from './LoginComp';

const FormComp = () => {
	const ref1 = useRef();
	const ref2 = useRef();
	const [page, setPage] = useState(false);

	useLayoutEffect(() => {
		ref1.current.className = 'innerCircleAnn';
		ref2.current.className = 'outerCircleAnn';
		setTimeout(() => {
			ref1.current.className = 'innerCircle';
			ref2.current.className = 'outerCircle';
		}, 3000);
	}, [page]);

	return (
		<>
			<Stack
				sx={{
					position: 'relative',
					overflow: 'hidden',
					minHeight: '100vh',
					width: '100vw'
				}}
				justifyContent='center'
				alignItems='center'>
				<Box
					sx={{
						zIndex: 999,
						width: 400,
						backgroundColor: 'white',
						display: 'flex',
						flexDirection: 'column',
						margin: 'auto',
						borderRadius: '5'
					}}>
					<Stack direction='row'>
						<Stack
							sx={{
								borderBottom: page ? 1 : 3,
								borderColor: 'black',
								width: '50%',
								p: 2
							}}>
							<Button
								variant='text'
								sx={{ textAlign: 'center' }}
								color='inherit'
								onClick={() => setPage(false)}>
								Zaloguj
							</Button>
						</Stack>
						<Stack
							sx={{
								borderColor: 'black',
								borderBottom: !page ? 1 : 3,
								width: '50%',
								p: 2
							}}>
							<Button
								variant='text'
								sx={{ textAlign: 'center' }}
								color='inherit'
								onClick={() => setPage(true)}>
								Założ konto
							</Button>
						</Stack>
					</Stack>
					{!page ? <LoginComp /> : <SignComp />}
				</Box>
				<div ref={ref1} />
				<div ref={ref2} />
			</Stack>
		</>
	);
};

export default FormComp;
