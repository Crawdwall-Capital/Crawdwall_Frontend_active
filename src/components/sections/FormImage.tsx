import React from "react";

const FromImage = () => {
  return (
    <section className="w-full h-full flex flex-col justify-end items-center p-8 pb-16"
      style={{
        backgroundImage: `url('/images/formImage.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="text-center space-y-6">
          <p className="text-h2-mobile md:text-h3-desktop text-white px-8">
            Trust is the bedrock of every successful project. Crawdwall provides the infrastructure to scale that trust globally.
          </p>
          <p className="text-body-lg-mobile md:text-body-lg-desktop text-primary">
            CRAWDWALL CAPITAL
          </p>
          <p className="text-body-sm-desktop text-neutral">
            © 2026 Crawdwall Capital. All rights reserved.
          </p>
        </div>
    </section>
  );
};

export default FromImage;