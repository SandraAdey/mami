function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-32 pt-32">
      <div>
        <p className="mx-auto max-w-4xl text-center text-4xl font-normal tracking-tight text-black">
          Increase your patient satisfaction scores, boost financial results,
          and lower administrative costs.
        </p>
        <div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-2xl font-normal tracking-tight text-black">
            Learn more about wawa fertility in a 1-on-1 demo.
          </p>
          <div className="mx-auto mt-10 w-full text-center">
            <a
              className="inline-flex w-auto items-center justify-center rounded-full bg-purple-800 px-6 py-4 text-center text-base font-medium text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-fuchsia-900 active:bg-fuchsia-900 lg:px-12 lg:text-xl"
              href="/contact"
            >
              Book a demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
