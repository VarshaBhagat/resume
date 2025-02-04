import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const SubHeader = (props: Props) => <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{props.children}</h2>


export default React.memo(SubHeader);
