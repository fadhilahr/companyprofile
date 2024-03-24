import Testimony from "@/components/testimony";
import { Metadata } from "next";
import Image from "next/image";



export const metadata: Metadata = {
  title: "Service",
  description: "Shinergy Tecno ! service page",
};

export default function Service() {
  return (
    <section>
      <div className=" flex flex-col items-center bg-base-100 my-20">
        <div className=" flex max-md:flex-col justify-around md:gap-10 py-10 md:w-[90vw]">
          <div className=" max-w-5xl gap-y-96">
            <h1 className=" text-4xl md:text-5xl font-bold text-center text-orange-400 mb-5">
              Our Service
            </h1>
            <div className=" flex justify-center gap-3 flex-wrap w-[90w] xl:[80vw]">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Mobile App</h2>
                </div>
                <figure>
                  <Image
                    src="/portfolio-01.jpg"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </figure>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Mobile App</h2>
                </div>
                <figure>
                  <Image
                    src="/portfolio-02.jpg"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </figure>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Web App</h2>
                </div>
                <figure>
                  <Image
                    src="/portfolio-08.png"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </figure>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Web App</h2>
                </div>
                <figure>
                  <Image
                    src="/portfolio-07.png"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center my-10 pb-10">
        <div className="flex flex-col items-center py-5 px-10 md:w-[90vw]">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-5 text-center">
            Testimony
          </h1>

        <Testimony />
      </div>
      </div>
      </div>
    </section>
  );
}
