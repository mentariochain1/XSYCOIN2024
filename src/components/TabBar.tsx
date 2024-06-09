import { FunctionComponent } from "react";

export type TabBarType = {
  className?: string;
};

const TabBar: FunctionComponent<TabBarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-dimgray flex flex-row items-start justify-between py-2 pr-[55px] pl-[53px] gap-[20px] text-center text-9xl text-white font-inter ${className}`}
    >
      <div className="w-[34px] flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[32px] font-normal font-inherit inline-block min-w-[32px]">
            🧸
          </h1>
        </div>
        <div className="relative text-sm leading-[20px] font-sf-pro-text text-left inline-block min-w-[34px]">
          frenx
        </div>
      </div>
      <div className="h-[57px] w-px relative box-border border-r-[1px] border-solid border-gray-400" />
      <div className="flex flex-col items-start justify-start gap-[4px] text-left text-sm font-sf-pro-text">
        <img
          className="w-8 h-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/tokenicon-11.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 px-px">
          <div className="relative leading-[20px] inline-block min-w-[30px]">
            earn
          </div>
        </div>
      </div>
      <div className="h-[57px] w-px relative box-border border-r-[1px] border-solid border-gray-400" />
      <div className="w-[34px] flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[32px] font-normal font-inherit inline-block min-w-[32px]">
            🍔
          </h1>
        </div>
        <div className="relative text-sm leading-[20px] font-sf-pro-text text-left inline-block min-w-[34px]">
          foost
        </div>
      </div>
    </div>
  );
};

export default TabBar;
