import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
   return (
      <Link
         className="exercise-card"
         to={`/exercise/${exercise.id}`}>
         <img
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
         />
         <Stack direction="row">
            <Button
               sx={{
                  ml: "14px",
                  color: "#fff",
                  background: "#ffa9a9",
                  borderRadius: "20px",
                  textTransform: "capitalize",
               }}>
               {exercise.bodyPart}
            </Button>
            <Button
               sx={{
                  ml: "14px",
                  color: "#fff",
                  background: "#fcc757",
                  borderRadius: "20px",
                  textTransform: "capitalize",
               }}>
               {exercise.target}
            </Button>
         </Stack>
         <Typography
            sx={{
               ml: "21px",
               color: "#000",
               fontWeight: "bold",
               fontSize: "22px",
               mt: "11px",
               textTransform: "capitalize",
            }}>
            {exercise.name}
         </Typography>
      </Link>
   );
};

export default ExerciseCard;
