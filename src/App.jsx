import React from "react";
import Emoji from "./assets/emoji.png";
import SkillList from "./Component/SkillList";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog";

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
          <a
            href="./varshaBhagatReact.pdf"
            target="_blank"
            className="p-1 rounded-lg text-xs md:text-sm w-max bg-[#00f5ff]"
          >
            Downloand Resume
          </a>
        </section>
      </header>
      <section className="flex">
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
      </section>
    </>
  );
};

export default React.memo(App);
