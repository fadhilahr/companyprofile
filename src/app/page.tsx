import Hero from "@/components/hero";
import Overview from "@/components/overview";
import Testimony from "@/components/testimony";
import Link from "next/link";

export default function Home() {
  return (
    <main className="z-10 bg-xblack overflow-x-hidden">
      <Hero />
      <Overview />

      <div className="flex justify-center items-center bg-base-100 my-20">
        <div className="flex max-md:flex-col justify-around md:gap-10 items-center px-10 py-10 md:w-[90vw]">
          <div className="md:flex-1 md:min-w-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold max-md: text-center text-orange-400 mb-5">
              Our Service
            </h1>
            <h4 className="text-xwhite text-2xl md:text-4xl font-light max-md: text-left mb-2">
              Crafting Tomorrow's Technology Today: Innovate, Create, Excel with
            </h4>
            <h4 className="text-thin text-md max-md:text-center md:mb-10">
              Shinergy Techno Indonesia
            </h4>
            <Link
              href={"/service"}
              className="hover:bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 bg-orange-400 max-md:hidden"
            >
              See more
            </Link>
          </div>
          <Link
            href={"/service"}
            className="hover:bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 bg-orange-400 md:hidden"
          >
            See more
          </Link>
        </div>
      </div>

      <div className="flex  justify-center items-center my-10 pb-10">
        <div className="flex flex-col items-center py-5 px-10 md:w-[90vw]">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-5 text-center">
            Testimony
          </h1>
          <p className="text-xwhite text-2xl font-light max-md:text-center mb-10">
            Our Client
          </p>
          <Testimony />
        </div>
      </div>
    </main>
  );
}
