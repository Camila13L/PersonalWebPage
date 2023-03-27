import { SVGIcon } from "../atoms/SVGIcon";
export const SocialMedia = () => {
  return (
    <div className="flex justify-around w-32 gap-5 px-20">
      <SVGIcon href="#" iconPath="icons/soccial-media/linkedin.svg" />
      <SVGIcon href="#" iconPath="icons/soccial-media/github.svg" />
      <SVGIcon href="#" iconPath="icons/soccial-media/google.svg" />
    </div>
  );
};
