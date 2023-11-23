import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '0' } }}>
			<Typography
				variant="h3"
				mb={5}
			>
				Exercises that target the same muscle group
			</Typography>
			<Stack
				direction="row"
				sx={{ p: '2', position: 'relative' }}
			>
				{targetMuscleExercise ? (
					<HorizontalScrollbar data={targetMuscleExercise} />
				) : (
					<Loader />
				)}
			</Stack>

			<Typography
				variant="h3"
				mb={5}
				mt="100px"
			>
				Exercises that use the same equipment
			</Typography>
			<Stack
				direction="row"
				sx={{ p: '2', position: 'relative' }}
			>
				{targetMuscleExercise ? (
					<HorizontalScrollbar data={equipmentExercise} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
