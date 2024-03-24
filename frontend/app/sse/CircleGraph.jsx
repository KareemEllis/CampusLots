'use client'
import { CircularProgress, CircularProgressLabel, Box } from "@chakra-ui/react";

export default function CircularGraph ({ maxValue, currentValue }) {
    // Calculate the percentage completion
    const progress = (currentValue / maxValue) * 100;
  
    return (
      <Box position="relative" display="inline-block">
        <CircularProgress
          value={progress}
          size="200px" // Adjust the size as needed
          thickness="12px" // Adjust the thickness of the circle
          color="blue.500" // Adjust the color of the filled portion
        >
          <CircularProgressLabel>{maxValue - currentValue}</CircularProgressLabel>
        </CircularProgress>
      </Box>
    );
  };
  