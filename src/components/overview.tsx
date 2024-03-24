"use client";

export default function Overview() {
  return (
    <div className="flex justify-center scrollmargin" id="overview">
      <div className="flex justify-evenly gap-10 flex-wrap-reverse items-center md:w-[90vw] pt-20 px-10">
        <div className="md:flex-1 md:min-w-[500px]">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-5 ">
            Company Overview
          </h1>
          <p className="text-xwhite leading-10 text-justify text-xl font-light">
            A software house, also known as a software development company or a
            software vendor, is an organization that specializes in creating,
            designing, testing, and maintaining software applications,
            platforms, and systems for various purposes. These companies
            typically employ software developers, engineers, designers, testers,
            and project managers who work together to deliver high-quality
            software solutions to clients.In summary, a software house plays a
            vital role in the digital economy by creating customized software
            solutions, leveraging technology to solve complex problems, and
            helping organizations stay competitive in today's rapidly evolving
            business landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
