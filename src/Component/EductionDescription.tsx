import React, { ReactNode } from "react";

interface Props {
  discription: string;
  name: string;
  date: string;
}
const EductionDescription = ({ name, discription, date }: Props) => {
  return (
    <>
      <div className="flex flex-col items-start mb-4 md:items-center md:justify-between md:flex-row">
        <h3 className="text-lg md:text-xl lg:text-2xl bold mt-4">{name}</h3>
        <p className="text-xs md:text-base">{date}</p>
      </div>
      <p className="text-xs md:text-base">{discription}</p>
    </>
  );
};

export default React.memo(EductionDescription);
