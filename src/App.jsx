import Emoji from "./assets/emoji.png"

function App() {
  return (
    <>
      <header
        className="h-64 flex items-center justify-evenly flex-col md:flex-row"
        style={{background: "#00d8ff"}}
      >
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
            className="bg-sky-600 p-1 rounded-lg text-xs md:text-base"
            style={{background: "#00f5ff"}}
          >
            Downloand
            Resume
          </a>
        </section>
      </header>
      <section className="flex">
        <div
          className="flex flex-col items-center"
         style={{width: "400px", background: "#fed7d745"}}
        >
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
            <h2 className="text-xl md:text-2xl lg:text-3xl bold">Projects</h2>
            <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
              CCRV Widget Frontend
            </h3>
            <ul className="list-disc">
              <li>
                <span className="bold">Technologies Used:</span> React, Ui
                Tiles, Tailwind CSS, Git, Jira, Jenkis, Docker
              </li>
              <li>
                Creative Concept Revision Variation (CCRV) - A variation is a
                change made to a CCR , which can be done by anyone with access
                to the CCRV widget, without the need of a creative designer (and
                workflow).
              </li>
            </ul>
            <h3 className="text-lg md:text-xl lg:text-2xl bold mt-8">
              Vdx Studio
            </h3>
            <ul className="list-disc">
              <li>
                <span className="bold">Technologies Used:</span> Vue, JS, CSS,
                Git
              </li>
              <li>
                Jira. Engineered VDX Studio, an in-house ad production tool,
                increasing campaign execution efficiency by 30% for both
                standard and advanced campaigns, including CTV units.
              </li>
            </ul>
            <h3 className="text-lg md:text-xl lg:text-2xl bold mt-8">
              Sixt Orange App Website
            </h3>
            <ul className="list-disc">
              <li>
                <span className="bold">Technologies Used:</span> React, Stencil,
                Git, Jira.
              </li>
              <li>
                Designed and launched the official Sixt Car Rental website using
                Stencil JS and CSS, achieving a 30% boost in user engagement.
              </li>
            </ul>
            <h3 className="text-lg md:text-xl lg:text-2xl bold mt-8">
              Treebo Official Website
            </h3>
            <ul className="list-disc">
              <li>
                <span className="bold">Technologies Used:</span> React, SCSS,
                Git, Jira.
              </li>
              <li>
                Designed and implemented user interfaces for the marketing
                website and application, increasing user engagement by 25%.
              </li>
            </ul>
          </section>
          <section>
            <section className="mt-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl bold">
                Experience
              </h2>
              <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
                <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                  Engineering Leadership
                </h3>
                <p className="text-xs md:text-base">Sep 2021 - Present</p>
              </div>
              <ul className="list-disc">
                <h3 className="text-lg">Vdx.tv</h3>
                <li>
                  Designed and developed responsive UI components, enhancing
                  user experience and interaction across web applications.
                </li>
                <li>
                  Identified and implemented web-based user interactions,
                  resulting in a 30% increase in user engagement.
                </li>
              </ul>
            </section>
            <section className="mt-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl bold">
                Experience
              </h2>
              <section>
                <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
                  <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                    Engineering Leadership
                  </h3>
                  <p className="text-xs md:text-base">Sep 2021 - Present</p>
                </div>
                <ul className="list-disc">
                  <h3 className="text-lg">Vdx.tv</h3>
                  <li>
                    Designed and developed responsive UI components, enhancing
                    user experience and interaction across web applications.
                  </li>
                  <li>
                    Identified and implemented web-based user interactions,
                    resulting in a 30% increase in user engagement.
                  </li>
                </ul>
              </section>
              <section>
                <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
                  <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                    Software Development Engineer (Frontend)
                  </h3>
                  <p className="text-xs md:text-base">Apr 2019 - Aug 2021</p>
                </div>
                <ul className="list-disc">
                  <h3 className="text-lg">Sixt Research & Development</h3>
                  <li>
                    Facilitated brainstorming sessions with the development
                    team, resulting in a 20% increase in user satisfaction
                    ratings.
                  </li>
                  <li>
                    Evaluated application requirements and interface designs,
                    achieving 100% compatibility and reducing integration issues
                    by 30%.
                  </li>
                  <li>
                    Championed user feedback initiatives, driving iterative
                    design improvements that boosted user engagement metrics by
                    18%.
                  </li>
                </ul>
              </section>
              <section>
                <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
                  <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                    Software Development Engineer (Frontend)
                  </h3>
                  <p className="text-xs md:text-base">Oct 2017 - Mar 2019</p>
                </div>
                <ul className="list-disc">
                  <h3 className="text-lg">Treebo Hotels</h3>
                  <li>
                    Monitored and optimized front-end performance, achieving a
                    30% reduction in load times, significantly enhancing user
                    experience.
                  </li>
                  <li>
                    Developed user-facing features with React.js, creating
                    reusable components that improved development efficiency by
                    25% across multiple projects.
                  </li>
                  <li>
                    Documented application changes meticulously, facilitating
                    knowledge transfer and future enhancements for the
                    development team.
                  </li>
                </ul>
              </section>
              <section>
                <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
                  <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                    Software Development Engineer (Frontend)
                  </h3>
                  <p className="text-xs md:text-base">Jul 2016 - Sep 2017</p>
                </div>
                <ul className="list-disc">
                  <h3 className="text-lg">HashedIn by Deloite</h3>
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
                </ul>
              </section>
            </section>
          </section>
          <section className="mt-8">
            <ul className="list-disc">
              <h2 className="text-xl md:text-2xl lg:text-3xl bold">
                Achievements
              </h2>
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
            <h2 className="text-xl md:text-2xl lg:text-3xl bold">Education</h2>
            <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
              <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                WOOLF University
              </h3>
              <p className="text-xs md:text-base">2025</p>
            </div>
            <p className="text-xs md:text-base">
              Pursuing MS from WOOLF University
            </p>
            <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
              <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">
                SRM University
              </h3>
              <p className="text-xs md:text-base">2016</p>
            </div>
            <p className="text-xs md:text-base">BE/B.Tech/BS</p>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
