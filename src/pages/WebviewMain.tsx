import { FunctionComponent } from "react";
import CommunityWidget from "../components/CommunityWidget";
import HeroSection from "../components/HeroSection";
import Content from "../components/Content";

const WebviewMain: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180.02deg,_#000_30.35%,_#adb6d6)] overflow-hidden flex flex-col items-start justify-start pt-4 px-4 pb-8 box-border tracking-[normal] leading-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full">
        <CommunityWidget avatar="/avatar@2x.png" />
        <HeroSection />
      </section>
      <Content />
    </div>
  );
};

export default WebviewMain;
