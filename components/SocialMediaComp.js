/** @format */

import styles from '/styles/Style.module.scss';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const SocialMediaComp = () => {
	return (
		<Box className={styles.mainSocialContainer}>
			<div className={styles.socialMedia}>
				<FacebookIcon sx={{ color: 'blue', mr: 2 }} />
				<Typography sx={{ textAlign: 'center' }}>
					Kontynuuj przez konto Facebook
				</Typography>
			</div>
			<div className={styles.socialMedia}>
				<AppleIcon sx={{ color: 'gray', mr: 2 }} />
				<Typography sx={{ textAlign: 'center' }}>
					Kontynuuj przez konto Apple
				</Typography>
			</div>
			<div className={styles.socialMedia}>
				<GoogleIcon sx={{ color: 'black', mr: 2 }} />
				<Typography sx={{ textAlign: 'center' }}>
					Kontynuuj przez konto Google
				</Typography>
			</div>
		</Box>
	);
};

export default SocialMediaComp;
