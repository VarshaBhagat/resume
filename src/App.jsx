import React from "react";
import Emoji from "./assets/emoji.png";
import ProjectDescription from "./Component/ProjectDescription";
import ProjcectExperience from "./Component/ProjcectExperience";
import SubHeader from "./Component/SubHeader";
import EductionDescription from "./Component/EductionDescription";

const App = () => {
  return (
    <>
      <header className="h-64 flex items-center justify-evenly flex-col md:flex-row bg-[#00d8ff]">
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
          <h2 className="text-xs md:text-xl lg:text-2xl bold">
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
          <a
            href="./varshaBhagatReact.pdf"
            target="_blank"
            className="bg-sky-600 p-1 rounded-lg text-xs md:text-base w-max bg-[#00f5ff]"
          >
            Downloand Resume
          </a>
        </section>
      </header>
      <section className="flex">
        <div className="flex flex-col items-center bg-[#fed7d745] w-96">
          <ul className="mt-8 p-8 text-sm md:text-base">
            <h2 className="text-lg md:text-xl lg:text-2xl bold">Skills</h2>
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
          </ul>
          <ul className="mt-8 p-8 text-sm md:text-base">
            <h2 className="text-lg md:text-xl lg:text-2xl bold">Language</h2>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
        <div className="p-10">
          <section>
            <SubHeader>Projects</SubHeader>
            <ProjectDescription
              title="CCRV Widget Frontend"
              tech="React, Ui Tiles, Tailwind CSS, Git, Jira, Jenkis, Docker"
              discription="Creative Concept Revision Variation (CCRV) - A variation is a
                change made to a CCR , which can be done by anyone with access
                to the CCRV widget, without the need of a creative designer (and
                workflow)"
            />
            <ProjectDescription
              title="Vdx Studio"
              tech="Vue, JS, CSS, Git, Jira, Jenkis, Docker"
              discription="Engineered VDX Studio, an in-house ad production tool,
                increasing campaign execution efficiency by 30% for both
                standard and advanced campaigns, including CTV units."
            />
            <ProjectDescription
              title="Sixt Orange App Website"
              tech="React, Stencil, CSS,  Git, Jira, Jenkis"
              discription="Designed and launched the official Sixt Car Rental website using
                Stencil JS and CSS, achieving a 30% boost in user engagement."
            />
            <ProjectDescription
              title="Treebo Official Website"
              tech="React, SCSS,  Git, Jira, Jenkis"
              discription="Designed and implemented user interfaces for the marketing
                website and application, increasing user engagement by 25%."
            />
          </section>
          <section>
            <section className="mt-8">
              <SubHeader>Experience</SubHeader>
              <ProjcectExperience
                title="Engineering Leadership"
                projectName="Vdx.tv"
                date="Sep 2021 - Present"
              >
                <li>
                  Designed and developed responsive UI components, enhancing
                  user experience and interaction across web applications.
                </li>
                <li>
                  Identified and implemented web-based user interactions,
                  resulting in a 30% increase in user engagement.
                </li>
              </ProjcectExperience>
              <ProjcectExperience
                title="Software Development Engineer (Frontend)"
                projectName="Sixt Research & Development"
                date="Apr 2019 - Aug 2021"
              >
                <li>
                  Facilitated brainstorming sessions with the development team,
                  resulting in a 20% increase in user satisfaction ratings.
                </li>
                <li>
                  Evaluated application requirements and interface designs,
                  achieving 100% compatibility and reducing integration issues
                  by 30%.
                </li>
                <li>
                  Championed user feedback initiatives, driving iterative design
                  improvements that boosted user engagement metrics by 18%.
                </li>
              </ProjcectExperience>
              <ProjcectExperience
                title="Software Development Engineer (Frontend)"
                projectName="Treebo Hotels"
                date="Oct 2017 - Mar 2019"
              >
                <li>
                  Monitored and optimized front-end performance, achieving a 30%
                  reduction in load times, significantly enhancing user
                  experience.
                </li>
                <li>
                  Developed user-facing features with React.js, creating
                  reusable components that improved development efficiency by
                  25% across multiple projects.
                </li>
                <li>
                  Documented application changes meticulously, facilitating
                  knowledge transfer and future enhancements for the development
                  team.
                </li>
              </ProjcectExperience>
              <ProjcectExperience
                title="Software Development Engineer (Frontend)"
                projectName="HashedIn by Deloite"
                date="Jul 2016 - Sep 2017"
              >
                <li>
                  Executed a project showcasing user interface designs,
                  achieving a 30% increase in client engagement and
                  satisfaction.
                </li>
                <li>
                  Managed multiple client projects simultaneously, enhancing
                  project delivery timelines by 25% through strategic
                  prioritization and clear communication.
                </li>
              </ProjcectExperience>
            </section>
          </section>
          <section className="mt-8">
            <ul className="list-disc">
              <SubHeader>Achievements</SubHeader>
              <li>Best Employee award in Sixt BANGALORE</li>
              <li>Best Employee award in Treebo Bangalore.</li>
              <li>
                State Talent Scholarship Ranchi | 2006 March - 2007 February
              </li>
              <li>
                Secured 3rd position in Robotryst zonal, Tryst IIT Delhi Chennai
                2015
              </li>
              <li>10th board District Topper</li>
            </ul>
          </section>
          <section className="mt-8">
            <SubHeader>Education</SubHeader>
            <EductionDescription
              discription="WOOLF University"
              name="Pursuing MS from WOOLF University"
              date="2023-2025"
            />
            <EductionDescription
              discription="SRM University"
              name="B.Tech from Computer Science"
              date="2012-2016"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default React.memo(App);
