import React, { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/Asset.helper";
type Props = {
  className: string;
  linkTo?: string;
  path: string;
};
export const Logo: FC<Props> = ({ className, linkTo, path }) => {
  return (

      <img
        src={toAbsoluteUrl(path)}
        alt="logo"
        className={`object-contain ${className}`}
      />

  );
};
