import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const SkillList = ({ title, children }: Props) => {
  return (
    <ul className="mt-8 p-8 text-sm md:text-base list-disc">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{title}</h2>
      {children}
    </ul>
  );
};

export default React.memo(SkillList);
