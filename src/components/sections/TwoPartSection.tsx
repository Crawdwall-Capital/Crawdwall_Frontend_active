import React from "react";
import { TwoPartSectionProps } from "@/types";
import { Frame } from "@/components/ui/Frame";

const TwoPartSection = ({
  leftContent,
  rightContent,
  reverseOnDesktop = false,
}: TwoPartSectionProps) => {
  const flexDirection = reverseOnDesktop 
    ? "flex-col lg:flex-row-reverse" 
    : "flex-col lg:flex-row";

  return (
    <section className="py-section-gap-mobile md:py-section-gap bg-background">
      <Frame maxWidth="2xl" padding="lg">
        <div className={`flex ${flexDirection} items-center gap-12 lg:gap-16`}>
          {/* Left Content */}
          <div className="flex-1 w-full">
            {leftContent}
          </div>
          
          {/* Right Content */}
          <div className="flex-1 w-full">
            {rightContent}
          </div>
        </div>
      </Frame>
    </section>
  );
};

export { TwoPartSection };