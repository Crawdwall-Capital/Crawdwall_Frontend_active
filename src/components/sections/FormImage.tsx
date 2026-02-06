import React from "react";

const FromImage = () => {
  return (
    <section className="w-full h-full flex flex-col justify-end items-center p-8 pb-16 rounded-card shadow-2xl shadow-black/30"
      style={{
        backgroundImage: `url('/images/formImage.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <p className="text-h2-mobile md:text-h3-desktop text-white px-8 max-w-[450px]">
        Trust is the bedrock of every successful project. Crawdwall provides the infrastructure to scale that trust globally.
      </p>
      <div className="text-center space-y-6 ">

        <div className="flex items-center gap-4">
          <div className="w-14 h-[4px] bg-primary"></div>
          <p className="text-body-lg-mobile md:text-body-lg-desktop text-primary">
            CRAWDWALL CAPITAL
          </p>
        </div>
        
        <p className="text-body-sm-desktop text-neutral">
          © 2026 Crawdwall Capital. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FromImage;