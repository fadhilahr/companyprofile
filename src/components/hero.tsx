import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="flex items-center bg-base-100 my-20">
        <div className="flex max-md:flex-col justify-around md:gap-10 items-center px-10 py-10 md:w-[90vw]">
          <div className="max-w-5xl gap-y-96">
            <h1 className="text-base font-semibold md:text-xl text-amber-500">
              We are Shinergy Techno Indonesia
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                Software House Development
              </span>
              <p className="text-xwhite leading-10 text-justify text-xl font-light text-amber-500">
                Transforming Ideas into Reality: Your Trusted Partner for
                Comprehensive Software Development Solutions Tailored to Meet
                Your Unique Business Needs and Drive Digital Success
              </p>
              <Link
                href="#overview"
                className=" bg-orange-400 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-orange-300"
              >
                Get Started
              </Link>
            </h1>
          </div>

          <div className="w-full self-end px-4">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src="image.jpg"
                alt="image"
                className="relative z-20 mx-auto max-w-full"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="600"
                  height="600"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
