import { FunctionComponent } from "react";

export type EnergyBarType = {
  className?: string;
};

const EnergyBar: FunctionComponent<EnergyBarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[12px] max-w-full text-left text-3xl text-white font-termina-test ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-center">
          <b className="relative leading-[20px] font-bold inline-block min-w-[75px]">
            1000
          </b>
          <div className="relative text-sm leading-[16px] font-medium font-sf-pro-text text-gray-200 inline-block min-w-[43px]">
            / 1000
          </div>
        </div>
        <div className="w-[194.5px] flex flex-row items-center justify-end gap-[8px] text-sm font-sf-pro-text">
          <div className="self-stretch w-3.5 relative leading-[20px] font-semibold hidden">
            􀋦
          </div>
          <div className="relative leading-[20px] font-medium font-sf-pro inline-block min-w-[47px]">
            Energy
          </div>
        </div>
      </div>
      <div className="self-stretch h-2 rounded-29xl bg-gray-300 flex flex-row items-center justify-start max-w-full">
        <div className="self-stretch flex-1 rounded-29xl [background:linear-gradient(90deg,_#c2c2c2,_#d3d3d3_90.41%)] max-w-full" />
      </div>
    </div>
  );
};

export default EnergyBar;
