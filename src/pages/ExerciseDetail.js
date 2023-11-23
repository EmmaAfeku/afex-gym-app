import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import fetchData, { exerciseOptions, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
	const [equipmentExercise, setEquipmentExercise] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideoData.contents);

			const targetMuscleExerciseData = await fetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions
			);
			setTargetMuscleExercise(targetMuscleExerciseData);

			const equipmentExerciseData = await fetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions
			);
			setEquipmentExercise(equipmentExerciseData);
		};
		fetchExerciseData();
	}, [id]);
	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />

			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExercise={targetMuscleExercise}
				equipmentExercise={equipmentExercise}
			/>
		</Box>
	);
};

export default ExerciseDetail;
