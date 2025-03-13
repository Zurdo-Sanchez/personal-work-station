import { Box, keyframes } from "@mui/material";
import { use, useEffect } from "react";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

function BallLoader(loading) {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A1"];

  return (
    <>
      {loading.loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(15px)",
            zIndex: 9999, // Siempre al frente
          }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: colors[index],
                  borderRadius: "50%",
                  animation: `${bounce} 1.2s infinite`,
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}

export default BallLoader;
