import React, { FC } from "react";
import { Link } from "react-router-dom";
type Props = {
  className: string;
  linkTo: string;
  label: string;
};
export const Anchor: FC<Props> = ({ className, linkTo, label }) => {
  return (
    // <Link
    // to=
    // >
      <a className={`${className}`} href="#2">
        {label}
      </a>
    // </Link>
  );
};
