import React from "react";
import { HeroProps } from "@/types";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";

const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  
}: HeroProps) => {
  // Function to highlight specific words in primary color
  const renderHighlightedTitle = (text: string) => {
    const wordsToHighlight = ['Events', 'More'];
    const words = text.split(' ');
    
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?;:]/, ''); // Remove punctuation for comparison
      const punctuation = word.replace(cleanWord, ''); // Extract punctuation
      
      if (wordsToHighlight.includes(cleanWord)) {
        return (
          <span key={index}>
            <span className="text-primary">{cleanWord}</span>
            {punctuation}{index < words.length - 1 ? ' ' : ''}
          </span>
        );
      }
      return <span key={index}>{word}{index < words.length - 1 ? ' ' : ''}</span>;
    });
  };

  return (
    <section 
      className="py-0 md:py-0 bg-background"
      style={{
        backgroundImage: `url('/images/background_image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Frame maxWidth="full" padding="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-24 md:py-32">
          {/* Text Content */}
          <div className="w-full max-w-xl text-center lg:text-left">
            <h1 className="text-h1-mobile md:text-h1-desktop text-slate-800 mb-6 font-semibold">
              {renderHighlightedTitle(title)}
            </h1>
            <p className="text-body-lg-mobile md:text-body-lg-desktop text-slate-600 mb-8">
              {subtitle}
            </p>
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {secondaryButtonText && (
                  <Button 
                    variant="secondary" 
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
                {primaryButtonText && (
                  <Button 
                    variant="primary" 
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonText}
                  </Button>
                )}
                
              </div>
            )}
          </div>
          
          
        
        </div>
      </Frame>
    </section>
  );
};

export { Hero };