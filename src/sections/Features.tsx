// import AppFrame from "../assets/app_frame.png";
// import ShieldCheck from "../assets/icons/check.png";
// import Coins from "../assets/icons/coins.png";
// import Frames from "../assets/frames.png";

function Features() {
  return (
    <section
      id="features"
      className="flex max-w-7xl flex-col gap-10 px-8 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-left text-gray-500 md:m-0 md:w-full">
        <p className="mt-30 text-2xl font-normal text-black lg:text-4xl">
          Track your administrative burden so you can deliver care more
          effectively.
        </p>
      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Communicate
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Chat with your patients via a familiar chat interface, or via
              video call. Patients can reach you when they have questions, and
              you can respond to them when it's convenient.
            </p>
          </div>

          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            {/* <img src={} alt="Kobodrop app frame" /> */}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            {/* <img src={} alt="" /> */}
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">Track</h2>
          <p className="text-gray-500">
            Your money is 100% safe and secure on Kobodrop. No hassles, no
            glitches, get access to your money anytime.
          </p>
        </div>
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-orange-200 p-4">
            {/* <img src={} alt="" /> */}
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">Well being</h2>
          <p className="text-gray-500">
            Kobodrop reduced payments maintenance and processing fees. No hidden
            fees.
          </p>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Schedule
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Schedule appointments with automatic reminders and helpful content
              for patients. Quick check in? Use our video calls instead.
            </p>
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <img
              // src={Frames}
              alt="image"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Features;
