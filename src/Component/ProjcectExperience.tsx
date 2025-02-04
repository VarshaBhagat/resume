import React, { ReactNode } from "react";

interface Props {
  title: string;
  projectName: string;
  children: ReactNode;
  date: string;
}
const ProjcectExperience = ({ title, projectName, date, children }: Props) => {
  return (
    <section>
      <div className="flex flex-col items-start md:items-center md:justify-between md:flex-row">
        <h3 className="text-lg md:text-xl lg:text-2xl mt-4 mb-1">{title}</h3>
        <p className="text-xs md:text-base">{date}</p>
      </div>
      <ul className="list-disc">
        <h3 className="text-lg mb-1 font-bold">{projectName}</h3>
        {children}
      </ul>
    </section>
  );
};

export default React.memo(ProjcectExperience);
