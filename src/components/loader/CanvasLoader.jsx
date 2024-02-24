import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-white-100 mt-10 text-xs font-bold">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
