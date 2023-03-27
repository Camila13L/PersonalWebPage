import { Anchor } from "../atoms/Anchor";
export const NavbarSearch = () => {
  return (
    <>
      <div className="flex justify-around gap-10 px-10">
        <Anchor
          linkTo=""
          className="bg-black rounded-full text-teal-200 px-4 py-1"
          label="home"
        />
        <Anchor
          linkTo=""
          className="p-1 hover:text-teal-400"
          label="about me"
        />
        <Anchor
          linkTo=""
          className="p-1 hover:text-teal-400"
          label="my projects"
        />
        <Anchor
          linkTo=""
          className="p-1 hover:text-teal-400"
          label="contact me"
        />
      </div>
    </>
  );
};
