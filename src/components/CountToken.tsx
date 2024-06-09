import { FunctionComponent } from "react";

export type CountTokenType = {
  className?: string;
};

const CountToken: FunctionComponent<CountTokenType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[11px] text-center text-17xl text-white font-termina-test ${className}`}
    >
      <img
        className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
        loading="lazy"
        alt=""
        src="/tokenicon.svg"
      />
      <a className="[text-decoration:none] relative tracking-[0.03em] leading-[40px] font-bold text-[inherit] inline-block min-w-[36px]">
        0
      </a>
    </div>
  );
};

export default CountToken;
