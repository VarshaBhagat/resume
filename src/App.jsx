import React, { useState } from "react";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { IoLocation, IoBagOutline } from "react-icons/io5";

const Header = ({ children }) => (
  <p className="mb-8 uppercase text-lg font-bold">{children}</p>
);

const Card = ({
  header,
  company,
  location,
  duration,
  isShowDetails,
  children,
  updateShowDetails
}) => {
  console.log( "show", isShowDetails);
  return (
    <div className="box-shadow p-8 flex">
      <div
        className="flex items-center justify-center"
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "aqua",
          marginRight: "20px",
          borderRadius: "5px",
        }}
      >
        <IoBagOutline color="white" size="20px" />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="font-bold mb-2">{header}</h3>
          <p className="mb-2">{company}</p>
          <p className="mb-2">{location}</p>
          <p className="mb-2" style={{ color: "#808080d6" }}>
            {duration}
          </p>
        </div>
        {isShowDetails && (
          <div>
            <hr className="mt-8 mb-8" />
            {children}
          </div>
        )}
        {isShowDetails && (
          <button onClick={() => updateShowDetails(true)}>Show Description</button>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [isShowDetails, updateShowDetails] = useState(false);
  return (
    <>
      <div className="mid mb-16">
        <header className="mid-sec box-shadow">
          <div className="header-img"></div>
          <div
            className="flex justify-between"
            style={{ padding: "20px 80px" }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Varsha Bhagat
              </h2>
              <p
                className="flex items-center"
                style={{
                  textTransform: "uppercase",
                }}
              >
                <IoLocation color="#00DCD9" size="16px" />
                <span className="ml-2">Bangalore</span>
              </p>
            </div>
            <a
              className="text-xs md:text-base flex justify-center"
              style={{
                background: "#b21010",
                alignItems: "center",
                padding: "5px 60px",
                borderRadius: "20px",
                color: "white",
                textTransform: "uppercase",
                fontSize: "20px",
                height: "50px",
              }}
              href="tel:918971295611"
            >
              Contact Me
            </a>
          </div>
        </header>
        <section className="mid-sec mt-16">
          <Header>Summary</Header>
          <div className="box-shadow">
            <p className="p-8">
              Accomplished Frontend Engineering Lead at Vdx.tv, specializing in
              React.js and performance optimization. Successfully designed
              scalable applications and reduced development time by 35%. Adept
              at mentoring teams and enhancing user engagement through
              innovative UI solutions. Proven ability to drive project success
              while fostering collaboration and best practices.
            </p>
          </div>
        </section>
        <section className="mid-sec mt-16">
          <Header>Work History</Header>
          <div
            style={{
              width: "60%",
            }}
          >
            <Card
              header="Frontend Engineering Lead"
              company="Vdx.tv"
              location="Remote"
              duration="09.2021 - Current"
              isShowDetails={true}
              updateShowDetails={updateShowDetails}
            >
              <ul className="list-disc marker:text-sky-400">
                <li>
                  Designed and implemented scalable React.js applications,
                  powering high-traffic ad-tech systems.
                </li>
                <li>
                  Developed and maintained a shared UI component library,
                  reducing code duplication and development time by 35%.
                </li>
                <li>
                  Partnered with product and design teams to deliver highly
                  performant user interfaces.
                </li>
                <li>
                  Conducted performance audits and introduced optimizations that
                  improved page load speed and increased user engagement by 30%.
                </li>
                <li>
                  Mentored junior engineers, and established best practices for
                  code quality and maintainability.
                </li>
                <li>
                  <b>CCRV Widget Project</b> (React, Tailwind CSS) — Built an
                  AI-integrated creative tool to streamline ad workflows.
                </li>
                <li>
                  <b>VDX Studio Project</b> (Vue.js, JavaScript) — Developed a
                  scalable ad production platform, and accelerated delivery by
                  30%.
                </li>
              </ul>
            </Card>
            <div className="mb-16"></div>
            <Card
              header="Sr Frontend Engineer"
              company="Sixt Research & Development"
              location="Banaglore"
              duration="04.2019 - 08.2021"
              isShowDetails
              updateShowDetails={updateShowDetails}
            >
              <ul className="list-disc marker:text-sky-400">
                <li>
                  Created modular, testable UI components using Stencil.js and
                  modern CSS.
                </li>
                <li>
                  Played a key role in launching a redesigned customer web
                  portal, increasing customer satisfaction by 20%.
                </li>
                <li>
                  Initiated usability testing workflows, contributing to an 18%
                  increase in user retention.
                </li>
                <li>
                  <b>Sixt Orange Web App</b> (Stencil.js, CSS, React): Led
                  frontend development for the customer-facing Sixt rental
                  portal; boosted engagement by 40% post-launch.
                </li>
              </ul>
            </Card>
            <div className="mb-16"></div>
            <Card
              header="Frontend Engineer"
              company="Treebo Hotels"
              location="Remote"
              duration="10.2017 - 03.2019"
              isShowDetails
              updateShowDetails={updateShowDetails}
            >
              <ul className="list-disc marker:text-sky-400">
                <li>
                  Migrated the marketing website to React.js, improving page
                  performance, and reducing load times by 30%.
                </li>
                <li>
                  Introduced component-based development practices, resulting in
                  a 25% reduction in time to market.
                </li>
                <li>
                  Partnered with product and design teams to deliver highly
                  performant user interfaces.
                </li>
                <li>
                  Maintained thorough documentation for seamless team
                  onboarding.
                </li>
                <li>
                  <b>Treebo Marketing Website</b>: React.js, CSS. Created
                  performant booking flows and responsive design systems for
                  hotel discovery and conversion.
                </li>
              </ul>
            </Card>
            <div className="mb-16"></div>
            <Card
              header="Sr Frontend Engineer"
              company="HashedIn by Deloitte"
              location="Banaglore"
              duration="07.2016 - 09.2017"
              isShowDetails
              updateShowDetails={updateShowDetails}
            >
              <ul className="list-disc marker:text-sky-400">
                <li>
                  Delivered pixel-perfect, performant web apps for enterprise
                  clients in a fast-paced environment.
                </li>
                <li>
                  Managed multiple client projects in parallel, improving
                  average delivery time by 25%.
                </li>
                <li>
                  <b>Meetup AI Notes Tool</b>: Built an AI-integrated interface
                  to auto-summarize meeting conversations.
                </li>
              </ul>
            </Card>
          </div>
        </section>
        <section className="mid-sec mt-16">
          <Header>Education</Header>
          <div
            style={{
              width: "fit-content",
            }}
          >
            <Card
              header="Master of Science - Computer Science"
              company="Scaler Neovarsity X WOOLF"
              location="Remote"
              duration="04-2025"
              isShowDetails={false}
            ></Card>
            <div className="mb-16"></div>
            <Card
              header="B. Tech - Computer Science"
              company="SRM University"
              location="Chennai"
              duration="05-2016"
              isShowDetails={false}
            ></Card>
          </div>
        </section>
        <section className="mid-sec mt-16">
          <Header>Skills</Header>
          <div
            className="box-shadow flex flex-grow-1"
            style={{
              width: "fit-content",
            }}
          >
            <ul className="p-8 list-disc marker:text-sky-400">
              <li>Reactjs and TypeScript</li>
              <li>JavaScript (ES6)</li>
              <li>Vuejs and Stenciljs</li>
              <li>Performance metrics and architecture</li>
              <li>Component architecture and design systems</li>
            </ul>
            <ul className="p-8 list-disc marker:text-sky-400">
              <li>Tailwind CSS and modular CSS</li>
              <li>UI/UX best practices</li>
              <li>Version control with Git</li>
              <li>Project management with JIRA</li>
              <li>Static site generation with Jekyll</li>
            </ul>
          </div>
        </section>
        <section className="mid-sec mt-16">
          <Header>Accomplishments</Header>
          <div
            className="box-shadow"
            style={{
              width: "fit-content",
            }}
          >
            <ul className="p-8">
              <li>🏅 Best Employee Award – Sixt Bangalore</li>
              <li>🏅 Best Employee Award – Treebo Bangalore</li>
              <li>🧠 State Talent Scholarship (2006–2007)</li>
              <li>🤖 3rd Place – Robotryst Zonal, IIT Delhi (2015)</li>
              <li>🎓 District Topper – 10th Board</li>
            </ul>
          </div>
        </section>

        {/* <header className="h-64 flex items-center justify-evenly flex-col md:flex-row bg-[#00d8ff]">
        <img
          src={Emoji}
          alt="emoji"
          className="w-16 md:w-32 lg:w-48 rounded-full bg-white"
        />
        <section className="text-white">
          <p className="text-base md:text-sm lg:text-base">Hello I a&apos;m</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Varsha Bhagat
          </h1>
          <h2 className="text-xs md:text-xl lg:text-2xl font-bold">
            FE Senior Engineer
          </h2>
        </section>
        <section className="text-white flex flex-col">
          <a className="text-xs md:text-base" href="tel:918971295611">
            +91 8971295611
          </a>
          <a
            className="text-xs md:text-base mb-2"
            href="mailto:varshabhagat07@gmail.com"
          >
            varshabhagat07@gmail.com
          </a>
        </section>
      </header> */}
        {/* <section className="flex">
          <div className="flex flex-col items-center bg-[#fed7d745] w-64 md:w-96">
            <SkillList title="Skills">
              <li>React JS</li>
              <li>Jeykll</li>
              <li>SCSS</li>
              <li>HTML</li>
              <li>Jeykll</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Visual Studio</li>
              <li>Jenkins</li>
              <li>JIRA</li>
            </SkillList>
            <SkillList title="Language">
              <li>English</li>
              <li>Hindi</li>
            </SkillList>
          </div>
          <div className="pb-10 pt-10">
            <Router>
              <Routes>
                <Route path="/:slug" element={<Blog />} />
              </Routes>
            </Router>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default React.memo(App);
