import React from "react";
import { FooterProps } from "@/types";
import { Frame } from "@/components/ui/Frame";

const Footer = ({ sections, copyrightText }: FooterProps) => {
  const [firstSection, ...restSections] = sections;

  return (
    <footer className="relative py-12 md:py-16 bg-gradient-to-t from-secondary from-0% to-white to-20%">
      <Frame maxWidth="full" padding="lg">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-12">
          {/* First Section - Left Side */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {firstSection.title === "Product" ? (
                <img 
                  src="/images/CW1.png" 
                  alt="Crawdwall Logo" 
                  className="h-12 w-auto mb-2"
                />
              ) : (
                <h3 className="text-h3-mobile text-slate-800 font-semibold">
                  {firstSection.title}
                </h3>
              )}
              <ul className="space-y-3">
                {firstSection.links.map((link, index) => (
                  <li key={`${firstSection.title}-${index}`}>
                    <a
                      href={link.href}
                      className="text-body-md-mobile text-slate-600 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rest of Sections - Right Side */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {restSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-h3-mobile text-slate-800 font-semibold">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={`${section.title}-${index}`}>
                        <a
                          href={link.href}
                          className="text-body-md-mobile text-slate-600 hover:text-primary transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-600">
          <p className="text-center text-body-sm-desktop text-white">
            {copyrightText}
          </p>
        </div>
      </Frame>
    </footer>
  );
};

export { Footer };