import { FC } from "react";
import { Navbar } from "../organisms/Navbar";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
export const DefaultTemplate: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
