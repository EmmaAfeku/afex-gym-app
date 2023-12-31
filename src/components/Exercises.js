import { useState, useEffect } from "react";
// import  from "@mui/material/Pagination";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import fetchData, { exerciseOptions } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const exercisePerPage = 9;

   useEffect(() => {
      const fetchExercise = async () => {
         let exerciseData = [];

         if (bodyPart === "all") {
            exerciseData = await fetchData(
               "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
               exerciseOptions
            );
         } else {
            exerciseData = await fetchData(
               `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
               exerciseOptions
            );
         }

         setExercises(exerciseData);
      };
      fetchExercise();
   }, [bodyPart]);

   const indexOfLastExercise = currentPage * exercisePerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
   const currentExercises = exercises.slice(
      indexOfFirstExercise,
      indexOfLastExercise
   );
   const paginate = (e, value) => {
      setCurrentPage(value);

      window.scrollTo({ top: 1800, behavior: "smooth" });
   };

   return (
      <Box
         id="exercises"
         sx={{
            mt: { lg: "110px" },
         }}
         mt="50px"
         p="20px">
         <Typography
            variant="h3"
            mb="45px">
            Showing Results
         </Typography>
         <Stack
            direction="row"
            sx={{ gap: { lg: "110px", xs: "50px" } }}
            flexWrap="wrap"
            justifyContent="center">
            {currentExercises.map((exercise, index) => (
               <ExerciseCard
                  key={index}
                  exercise={exercise}
               />
            ))}
         </Stack>
         <Stack
            mt="100px"
            alignItems="center">
            {exercises.length > 9 && (
               <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                  count={Math.ceil(exercises.length / 9)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
               />
            )}
         </Stack>
      </Box>
   );
};

export default Exercises;
