import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
  };

  const textStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 40,
  };

  const loaderStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#F1F1F1",
    animation: "loader 1s infinite ease-in-out",
  };

  return (
    <Html as="div" center style={containerStyle}>
      <style>
        {`
          @keyframes loader {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
      <span style={loaderStyle} />
      <p style={textStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;