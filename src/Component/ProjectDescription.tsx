import React from "react";

interface Props {
  title: string;
  tech: string;
  discription: string;
}
const ProjectDescription = ({ title, tech, discription }: Props) => {
  return (
    <>
      <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4 mb-2">{title}</h3>
      <ul className="list-disc">
        <li>
          <span className="bold">Technologies Used:</span> {tech}
        </li>
        <li>{discription}</li>
      </ul>
    </>
  );
};

export default React.memo(ProjectDescription);
