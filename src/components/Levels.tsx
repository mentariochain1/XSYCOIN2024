import { FunctionComponent } from "react";

export type LevelsType = {
  className?: string;
};

const Levels: FunctionComponent<LevelsType> = ({ className = "" }) => {
  return (
    <div
      className={`!m-[0] absolute top-[0px] left-[56px] [backdrop-filter:blur(100px)] rounded-21xl flex flex-row items-center justify-center py-0 px-2 gap-[8px] text-left text-sm text-white font-sf-pro-text ${className}`}
    >
      <img
        className="h-5 w-5 relative object-cover min-h-[20px]"
        loading="lazy"
        alt=""
        src="/earth@2x.png"
      />
      <div className="flex flex-row items-center justify-center gap-[4px]">
        <b className="relative leading-[20px] font-semibold inline-block min-w-[37px]">
          Earth
        </b>
        <div className="w-[11px] flex flex-row items-center justify-center p-0.5 box-border">
          <img
            className="h-[11.9px] w-[6.7px] relative"
            loading="lazy"
            alt=""
            src="/.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Levels;
