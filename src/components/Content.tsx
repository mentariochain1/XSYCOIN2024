import { FunctionComponent } from "react";
import EnergyBar from "./EnergyBar";
import TabBar from "./TabBar";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-3xl text-white font-termina-test ${className}`}
    >
      <EnergyBar />
      <TabBar />
    </footer>
  );
};

export default Content;
