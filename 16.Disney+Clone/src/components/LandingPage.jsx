import React from 'react';
import landingBkImage from '../images/landing-backimage.jpg';
import ctaLogo1 from '../images/cta-logo-one.svg';
import ctaLogo2 from '../images/cta-logo-two.png';

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="relative max-h-[calc(100vh-4.5rem)] ">
        <div className="wrapper">
          <img src={landingBkImage} alt="background"  className='absolute object-cover h-[calc(100vh-4.5rem)] w-screen'/>
          <div className="flex justify-center items-center">
            <div className="absolute flex flex-col justify-center items-center space-y-4 top-40 w-full max-w-screen-sm p-8 ">
              <img
                src={ctaLogo1}
                width="600"
                height="150"
                alt="logo"
                className='object-contain'
              />
              <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-blue-500">
                Get All There
              </button>
              <p className="text-xs text-center pb-4">
                Get Premier Access to Raya and the Last Dragon for an additional
                fee with a Disney+ subscription. As of 03/26/21, the price of
                Disney+ and The Disney Bundle will increase by $
              </p>
              <img
                src={ctaLogo2}
                width="600"
                height="70"
                alt="logo"
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
