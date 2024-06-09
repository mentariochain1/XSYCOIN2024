import { FunctionComponent } from "react";

export type CharacterType = {
  className?: string;
};

const Character: FunctionComponent<CharacterType> = ({ className = "" }) => {
  return (
    <img
      className={`self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/1stcharacter@2x.png"
    />
  );
};

export default Character;
