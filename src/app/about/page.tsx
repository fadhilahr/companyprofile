export default function About() {
  return (
    <section>
      <div className=" flex items-center bg-base-100 my-20">
        <div className=" flex max-md:flex-col justify-around md:gap-10 py-10 md:w-[90vw]">
          <div className=" max-w-5xl gap-y-96">
            <h1 className=" text-4xl md:text-5xl font-bold max-md: text-center text-orange-400 mb-5">
              About Us
            </h1>
            <p className="text-xwhite leading-10 text-justify text-xl font-light">
              A software house, also known as a software development company, is
              an organization that specializes in designing, creating, and
              maintaining software applications, systems, and solutions for
              various clients. These companies typically employ teams of
              software engineers, developers, designers, testers, and project
              managers who work together to deliver customized software products
              and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
