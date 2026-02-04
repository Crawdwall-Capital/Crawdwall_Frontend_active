import React from "react";
import { ProposalToPayoutProps } from "@/types";
import { Card } from "@/components/ui/Card";
import { Frame } from "@/components/ui/Frame";
import { Button } from "@/components/ui/Button";

const ProposalToPayout = ({ steps }: ProposalToPayoutProps) => {
  return (
    <section 
      className="py-section-gap-mobile md:py-section-gap bg-slate-100"
      style={{
        backgroundImage: "url('/images/background_image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Frame maxWidth="full" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2-desktop text-slate-800 mb-4">
            Two Paths, One Financial Engine
          </h2>
          <p className="text-body-md-mobile md:text-body-md-desktop text-slate-600 max-w-3xl mx-auto">
            We provide structured solutions that help businesses raise capital and access financing with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Card
              key={step.id}
              padding="xl"
              hover={true}
              className="text-center h-full w-full max-w-lg mx-auto"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Step Title */}
                <h3 className="text-h3-mobile md:text-h3-desktop text-slate-800 mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-body-md-mobile md:text-body-md-desktop text-slate-600 mb-6">
                  {step.description}
                </p>
                <h3 className="text-body-lg-mobile md:text-body-lg-desktop text-slate-800 text-left mb-3">Ideas:</h3>
                {/* Ideas with bullet points */}
                {step.ideas && step.ideas.length > 0 && (
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3 text-left">
                      {step.ideas.map((idea, ideaIndex) => (
                        <li key={ideaIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          <span className="text-body-md-mobile md:text-body-md-desktop text-slate-600">
                            {idea}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={step.onButtonClick}
                    disabled={!step.onButtonClick}
                  >
                    {step.buttonText}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Frame>
    </section>
  );
};

export { ProposalToPayout };
