import hero from "../../../public/hero.jpg";
import Struktur from "@/components/struktur";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Shinergy Tecno ! about page",
};

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
            <p className="text-xwhite leading-10 text-justify text-xl font-light">
              Shinergy Techno Indonesia was founded in 2000 by a group of
              passionate software engineers who aimed to revolutionize the way
              businesses manage their data and processes. Initially operating
              from a small office space, the company focused on developing
              custom software solutions for local businesses, including
              inventory management systems and customer relationship management
              (CRM) tools.
            </p>
            <p className="text-xwhite leading-10 text-justify text-xl font-light">
              In 2011, Shinergy Techno Indonesia forged strategic partnerships
              with major technology firms to leverage their resources and access
              new markets. With a focus on globalization, the company
              established offices in key international locations, including
              Europe and Asia, to better serve its global clientele. XYZ
              Company's software products gained widespread acclaim for their
              user-friendly interfaces, advanced features, and seamless
              integration with emerging technologies like cloud computing and
              artificial intelligence (AI).
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" flex flex-col gap-5 items-center justify-center w-[90vw] pt-20 pb-28">
          <h1 className="text-4xl md:text-5xl font-bold text-blue2 pb-5 max-md:text-center text-orange-400">
            Struktur Perusahaan
          </h1>
          <div className=" flex justify-center gap-5 flex-wrap">
            <Struktur
              profile={hero}
              position={" Cief Excecutive Officer"}
              name={"Hugeng "}
              experience={
                " I don't have direct personal experiences or emotions like a human CEO would. However,I can provide you with information about the typical experiences and responsibilities of a Chief Executive Officer (CEO) based on common practices in the business world."
              }
            />
            <Struktur
              profile={hero}
              position={" Cief Financial Officer"}
              name={"Susi "}
              experience={
                " A CFO is a senior executive responsible for managing a company's financial actions. Their primary duties include financial planning, monitoring cash flow, analyzing the company's financial strengths and weaknesses, and making strategic decisions to ensure financial stability and growth.                ."
              }
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" flex flex-col gap-5 items-center justify-center w-[90vw] pt-20 pb-28">
          <h1 className="text-4xl md:text-5xl font-bold text-blue2 pb-5 max-md:text-center text-orange-400">
            Culture
          </h1>
          <div className="  landing-10 text-justify text-xl font-light">
            <p>
              Innovation and Creativity: Software development companies
              emphasize a culture of innovation and creativity. Employees are
              encouraged to think outside the box, come up with new solutions,
              and propose ideas that can enhance the company's products and
              services.
            </p>
            <p>
              Team Collaboration: Collaboration is a cornerstone of the working
              culture in software development. Development teams, designers,
              product managers, and other teams work together to achieve common
              goals, share knowledge, and effectively solve problems.
            </p>
            <p>
              Flexibility and Work-Life Balance: Many software development
              companies promote a culture that supports flexibility in working
              hours and a balance between work and personal life. This may
              include remote work options, flexible schedules, and a focus on
              mental health and employee well-being.
            </p>
            <p>
              Professional Development: Professional development is highly
              valued in the industry. Companies provide training, self-learning
              opportunities, and career development initiatives to help
              employees continuously improve their skills and knowledge.
            </p>
            <p>
              Respect for Opinions and Contributions: Employees are encouraged
              to actively participate in decision-making processes, provide
              input, and contribute to the company's product development and
              strategy. This culture strengthens a sense of ownership and
              employee engagement.
            </p>
            <p>
              Continuous Testing and Improvement: Software development companies
              prioritize continuous testing and improvement. Development teams
              conduct ongoing testing, identify issues, and make improvements to
              ensure high-quality products. Recognition and Appreciation:
              Companies value and recognize employees' contributions and
              achievements. This may include formal recognition programs,
              promotions, or other forms of acknowledgment that boost motivation
              and employee engagement.
            </p>
            <p>
              Commitment to Diversity and Inclusion: Many software development
              companies emphasize the importance of diversity and inclusion in
              their working culture. They promote an inclusive, fair, and
              discrimination-free environment based on gender, race, religion,
              sexual orientation, and other backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
