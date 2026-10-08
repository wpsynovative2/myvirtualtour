import TourViewer from "./components/TourViewer";
import { tourConfig } from "@/lib/tour";

export default function Home() {
  return (
    <TourViewer
      src={tourConfig.src}
      title={tourConfig.title}
      subtitle={tourConfig.subtitle}
    />
  );
}
