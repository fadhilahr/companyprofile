import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="flex items-center justify-center bg-base-100 my-20">
        <div className="flex max-md:flex-col justify-around md:gap-10 items-center px-10 py-10 md:w-[90vw]">
          <div className="max-w-5xl gap-y-96">
            <h1 className="text-base font-semibold md:text-xl text-amber-500">
              We are Shinergy Techno Indonesia
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                Software House Development
              </span>
              <p className="text-xwhite leading-10 text-justify text-xl font-light text-amber-500 mb-8">
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
            <div className="mt-10 lg:right-0 lg:mt-9">
              <Image
                src="/image.jpg"
                width={400}
                height={300}
                alt="image"
                className=" mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
