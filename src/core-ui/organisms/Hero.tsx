import { Logo } from "../atoms/Logo";
import { LeftSideHero } from "../molecules/LeftSideHero";
export const Hero = () => {
  return (
    <div className="flex lg:flex-row items-center justify-around mt-5 sm:flex-col sm:gap-5 content-center sm:mx-auto">
      <div>
        <LeftSideHero/>
      </div>
      <div>
        <Logo linkTo="" path="img/woman.webp" className="blur-sm h-96" />
      </div>
    </div>
  );
};
