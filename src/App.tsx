import React from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProposalToPayout } from "./components/sections/ProposalToPayout";
import { TwoPartSection } from "./components/sections/TwoPartSection";
import { Footer } from "./components/sections/Footer";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { IconCard } from "./components/ui/IconCard";

function App() {
  // Updated proposal steps with new content
  const proposalSteps = [
    {
      id: 1,
      title: "Financing",
      description: "Access flexible financing options designed to support sustainable business growth",
      ideas: [
        "Established organizer with repayment capacity",
        "Time-sensitive capital needs",
        "Project with clear revenue models",
       
      ],
      buttonText: "Apply for funding",
      onButtonClick: () => console.log("Start Proposal clicked"),
      
    },
    {
      id: 2,
      title: "Fundraising",
      description: "Access tailored financial support to scale your operations responsibly",
      ideas: [
        "High-growth project seeking network",
        "Deal structuring and compliance support",
        "Larger capital requirement",
     
      ],
      buttonText: "Apply for fundraising",
      onButtonClick: () => console.log("Learn More clicked"),
      
    },
    
  ];

  const footerSections = [
    {
      title: "Product",
      links: [
        
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Security", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ];

  return (
    <main>
      <Navbar/>
      <Hero
        title="Financial Solutions for Events and More"
        subtitle="The first platfrom connecting credible African organizers with vetted investor."
        primaryButtonText="Get Funding"
        secondaryButtonText="Start Investing"
        
      />

      <ProposalToPayout
        steps={proposalSteps}
      />

      <section className="py-section-gap-mobile md:py-section-gap bg-secondary rounded-3xl mx-4 md:mx-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-6">
              From Proposal To Payout
            </h2>
            <p className="text-body-lg-mobile md:text-body-lg-desktop text-white/90 max-w-3xl mx-auto">
              We have simplified a complex process of raising capital into a transparent, digital workflow
            </p>
          </div>

          {/* Icon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Build Your Proposal"
              summary="Input your event details, make a financial plan, upload your budget, and set your milestones."
            />
            <IconCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="Get Vetted"
              summary="Our admin team reviews your financials and track record. We verify credibility so investors don't have to."
            />
            <IconCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Receive Capital"
              summary="Once approved, funds are released in tranches based on your milestones. Track everything in real-time."
            />
          </div>
        </div>
      </section>

      {/* New Why Teams Choose Section */}
      <section className="py-section-gap-mobile md:py-section-gap bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-h2-mobile md:text-h2-desktop text-slate-800 mb-6">
              Why Teams Choose Crawdwall Capital
            </h2>
            <p className="text-body-lg-mobile md:text-body-lg-desktop text-slate-600 max-w-4xl mx-auto">
              We combine structured financing, strong governance and transparency to protect both organizers and investors.
            </p>
          </div>

          {/* Image and Sectors Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Single Image */}
            <div className="flex justify-center">
              <img 
                src="/images/image_5.png" 
                alt="Crawdwall Capital Team" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* 3 Sectors */}
            <div className="flex flex-col justify-between h-64 gap-2">
              {/* Sector 1 */}
              <Card padding="sm" className="flex-1">
                <div className="flex items-center gap-4 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Structured and Governed Funding
                    </h4>
                    <p className="text-sm text-slate-600">
                      Every proposal is vetted, tracked, and governed from start to finish
                    </p>
                  </div>
                </div>
              </Card>

              {/* Sector 2 */}
              <Card padding="sm" className="flex-1">
                <div className="flex items-center gap-4 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Transparency At Every Stage
                    </h4>
                    <p className="text-sm text-slate-600">
                      Clear status updates, milestone tracking, and Open communication
                    </p>
                  </div>
                </div>
              </Card>

              {/* Sector 3 */}
              <Card padding="sm" className="flex-1">
                <div className="flex items-center gap-4 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3zM12 4a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Designed for African Market
                    </h4>
                    <p className="text-sm text-slate-600">
                      Build with African businesses, events and funding realitites in mind
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Cards without Ideas Section */}
          <div className="flex justify-center max-w-4xl mx-auto">
            <Card
              padding="xl"
              hover={true}
              className="text-center w-full"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Card Title */}
                <h3 className="text-h3-mobile md:text-h3-desktop text-slate-800 mb-4">
                  Structured Financing
                </h3>

                {/* Card Description */}
                <p className="text-body-md-mobile md:text-body-md-desktop text-slate-600 mb-6">
                  Our systematic approach ensures transparent terms, clear milestones, and structured payment schedules that protect all parties involved.
                </p>

                <div className="mt-auto">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={() => console.log("Structured Financing clicked")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer
        sections={footerSections}
        copyrightText="© 2026 Crawdwall. All rights reserved."
      />
    </main>
  );
}

export default App;