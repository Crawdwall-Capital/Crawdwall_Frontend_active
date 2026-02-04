"use client";

import { Hero } from "@/components/sections/Hero";
import { ProposalToPayout } from "@/components/sections/ProposalToPayout";
import { TwoPartSection } from "@/components/sections/TwoPartSection";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home() {
  // Force dynamic rendering by using current time
  const currentTime = new Date().toISOString();
  const cacheKey = Date.now(); // Cache buster
  console.log("Page rendered at:", currentTime, "Cache key:", cacheKey);
  
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
        { label: "Features", href: "#" },
        { label: "Solutions", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
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
      <Hero
        title="Turn Your Event Into An Investable Asset"
        subtitle="The first platfrom connecting credible African organizers with vetted investor."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        
      />

      <ProposalToPayout
        steps={proposalSteps}
      />

      <TwoPartSection
        leftContent={
          <div>
            <h2 className="text-h2-mobile md:text-h2-desktop text-slate-800 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-body-lg-mobile md:text-body-lg-desktop text-slate-600 mb-8">
              Built with modern technologies and designed for teams who need 
              reliable, scalable solutions that grow with their business.
            </p>
            <ul className="space-y-4 mb-8">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-body-md-mobile md:text-body-md-desktop text-slate-600">
                    Feature {item}: Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </li>
              ))}
            </ul>
            <Button variant="primary">Explore Features</Button>
          </div>
        }
        rightContent={
          <Card padding="lg" hover={true} className="h-full">
            <div className="text-center py-8">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-h3-mobile md:text-h3-desktop text-slate-800 mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-body-md-mobile md:text-body-md-desktop text-slate-600 mb-6">
                Real-time insights into your performance metrics and project outcomes
              </p>
              <div className="space-y-4">
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-cyan-400 h-3 rounded-full" style={{ width: "67%" }}></div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </Card>
        }
      />

      <Footer
        sections={footerSections}
        copyrightText="© 2026 Crawdwall. All rights reserved."
      />
    </main>
  );
}