


import React from "react";

export default function Testimony() {
  return (
    <div className="w-full flex justify-center items-start gap-5 flex-wrap text-lg">
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-5">
        <div
          className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors"
        >
          <div className="py-10 px-4 bg-base-200 group-hover:bg-base-100 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              Working with Shinergy Techno Indonesia,has been an absolute
              pleasure. They understood our requirements perfectly and delivered
              a customized software solution that streamlined our operations and
              significantly boosted our efficiency. Their team's technical
              expertise, attention to detail, and proactive communication made
              the entire development process seamless. We are delighted with the
              results and look forward to continuing our partnership with XYZ
              Software Solutions for future projects
            </q>
            <p className="mt-10 text-center text-base text-xwhite">
              Marwal Iskandar , CTO PT. Maret Solution
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors "
        >
          <div className="py-10 px-4 bg-base-200 group-hover:bg-base-100 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              Shinergy Techno Indonesia not only met but exceeded our
              expectations with the software they developed for us. Their team
              showed a deep understanding of our industry and business needs,
              resulting in a solution that was not only functional but also
              scalable and future-proof. Their commitment to quality and
              customer satisfaction is commendable, and we are thrilled with the
              impact the software has had on our operations. We highly recommend
              Shinergy Techno Indonesia to anyone looking for reliable and
              innovative software solutions
            </q>
            <p className="mt-10 text-center text-base text-xwhite">
              Victor Igbonefo, Project Manager PT. Toba Techno Solution
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap gap-5">
        <div
          data-aos="zoom-in"
          className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors "
        >
          <div className="py-10 px-4 bg-base-200 group-hover:bg-base-100 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              Shinergy Techno Indonesia has been instrumental in helping us digitize
              our business processes. Their expertise in software development,
              coupled with their collaborative approach, allowed us to turn our
              vision into reality. The software they developed for us has
              improved our workflow efficiency, reduced manual errors, and
              ultimately saved us time and resources. We appreciate DEF Tech
              Solutions' dedication to delivering high-quality solutions and
              look forward to working with them on future projects.
            </q>
            <p className="mt-10 text-center text-base text-xwhite">
              Anang Ma'ruf, CTO PT. Bisa Media Utama
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
