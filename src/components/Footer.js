import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
	return (
		<Box
			mt="80px"
			bgcolor="#fff3f4"
		>
			<Stack
				alignItems="center"
				gap="40px"
				px="40px"
				pt="40px"
			>
				<img
					src={Logo}
					alt="logo"
					width="200px"
					heigth="40px"
				/>
				<Typography variant="h5">Made with Love by Afeku Emmanuel</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
