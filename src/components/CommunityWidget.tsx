import { FunctionComponent } from "react";

export type CommunityWidgetType = {
  className?: string;
  avatar?: string;
};

const CommunityWidget: FunctionComponent<CommunityWidgetType> = ({
  className = "",
  avatar = "pending_104:14605",
}) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-dimgray flex flex-row items-center justify-between p-4 gap-[20px] text-left text-smi text-white font-sf-mono ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-[12px]">
        <img
          className="h-12 w-12 relative rounded-2xl object-cover min-h-[48px]"
          loading="lazy"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col items-start justify-center py-1 px-0">
          <b className="relative tracking-[0.03em] leading-[20px] font-bold whitespace-nowrap">
            XSYCOIN COMMUNITY
          </b>
          <div className="flex flex-row items-center justify-start text-base text-gray-100">
            <div className="flex flex-row items-center justify-start gap-[3px]">
              <a className="[text-decoration:none] relative tracking-[0.02em] leading-[20px] font-semibold text-[inherit] inline-block min-w-[11px]">
                0
              </a>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/tokenicon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[11px] flex flex-row items-center justify-center p-0.5 box-border">
        <img
          className="h-[11.9px] w-[6.7px] relative"
          loading="lazy"
          alt=""
          src="/.svg"
        />
      </div>
    </div>
  );
};

export default CommunityWidget;
