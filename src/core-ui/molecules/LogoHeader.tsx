import { Logo } from "../atoms/Logo";

export const LogoHeader = () => {
  return (
    <div className="flex items-center px-10">
      <Logo
        path="Logos/origami.png"
        className="pl-5 "
        linkTo="/"
      />
        <Logo
        path="Logos/Camila.png"
        className="h-10 w-32"
        linkTo="/"
      />
    </div>
  );
};
