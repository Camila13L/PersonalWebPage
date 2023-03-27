import React, { FC } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../helpers/Asset.helper";
type Props = {
  className?: string;
  iconPath: string;
  href:string
};
export const SVGIcon: FC<Props> = ({ className, iconPath,href}) => {
  return (
    <a href={href}>
      <SVG src={`${toAbsoluteUrl(iconPath)}`} className={className} />
    </a>
  );
};
