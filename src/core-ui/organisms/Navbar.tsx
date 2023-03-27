import { LogoHeader } from "../molecules/LogoHeader";
import { NavbarSearch } from "../molecules/NavbarSearch";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 mx-auto">
      <LogoHeader />
      <NavbarSearch/>
    </div>
  );
};
