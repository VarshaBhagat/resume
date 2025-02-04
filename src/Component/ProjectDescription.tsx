import React from "react";

interface Props {
  title: string;
  tech: string;
  discription: string;
}
const ProjectDescription = ({ title, tech, discription }: Props) => {
  return (
    <>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 mb-1">{title}</h3>
      <ul className="list-disc">
        <li>
          <span className="font-bold">Technologies Used:</span> {tech}
        </li>
        <li>{discription}</li>
      </ul>
    </>
  );
};

export default React.memo(ProjectDescription);
