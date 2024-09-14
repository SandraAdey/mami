import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import HeroImage from "../assets/HeroImage.png";

function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-b from-[#F3E8FF] to-white">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 pt-8 md:px-12 lg:px-16 lg:pt-16">
        <div>
          <div className="flex justify-center">
            <div className="mb-12 inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
              <a href="#" target="_blank">
                Join our March 12 webinar on health and wellbeing
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-medium tracking-tighter text-black sm:text-3xl md:text-5xl lg:text-7xl">
            The operating system to run and grow your fertility clinic.
          </h1>
          <p className="text-md mx-auto mt-4 max-w-3xl leading-loose text-slate-900 sm:text-2xl">
            The IVF-focused platform for billing, clinical workflow, and patient
            communication that facilitates a smooth journey for patients.
          </p>
        </div>
        {/* Center the image */}
        <div className="relative mx-auto mt-12 flex w-full max-w-7xl justify-center">
          <img
            className="w-1/2 max-w-sm rounded-2xl"
            src={HeroImage}
            alt="phone"
          />
          <div className="absolute right-0 top-0 mr-8 mt-8 sm:mr-4 sm:mt-4 md:mr-8 md:mt-8 lg:mr-12 lg:mt-12">
            <StoreLinks type={BtnTypes.Standard} />
          </div>
        </div>
        <div className="mx-auto max-w-7xl justify-center px-8 md:px-12 lg:px-24">
          <div className="justify-center text-center lg:justify-start">
            <span className="inline-flex items-center pb-10 pt-20 text-lg font-medium">
              The best fertility app, mami fertility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
