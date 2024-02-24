import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../../../assets/earth.jpg";
function Timeline() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      globe: {
        baseTexture: earth,
        heightTexture: earth,
        shading: "lambert",
        light: {
          ambient: {
            intensity: 0.5,
          },
          displacementQuality: "ultra",
          main: {
            intensity: 1,
          },
        },
        viewControl: {
          zoomSensitivity: 0,
        },
      },
      series: [],
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        ref={chartRef}
        className="absolute right-0 top-1/2 h-[350px] -translate-y-1/2 transform bg-transparent md:h-[550px] xl:h-auto xl:flex-1"
        style={{
          width: "50%",
          height: window.innerWidth > 768 ? "550px" : "350px",
        }}
      ></div>
    </div>
  );
}

export default Timeline;
