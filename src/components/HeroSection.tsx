import { FunctionComponent } from "react";
import CountToken from "./CountToken";
import Levels from "./Levels";
import Character from "./Character";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-center text-17xl text-white font-termina-test ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
          <CountToken />
          <div className="w-[172px] flex flex-row items-center justify-start py-0 px-5 box-border relative gap-[4px] text-xs font-sf-pro">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <b className="w-6 relative leading-[20px] font-semibold inline-block min-w-[24px]">
                0 🔥
              </b>
            </div>
            <Levels />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center max-w-full">
          <Character />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
