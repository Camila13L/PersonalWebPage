import { Anchor } from "../atoms/Anchor";
import { Logo } from "../atoms/Logo";
export const LeftSideHero = () => {
  return (
    <div className="flex flex-col max-w-[500px] justify-center">
      <div className="flex flex-wrap sm:justify-center items-center">
        <h1 className="font-bold text-4xl break-words">FULL STACK DEVELOPER</h1>
        <p className="mt-8">
          soy un pato con muchas habilidad espero que un dia puedan contratarme
          y pagarme en dolares
        </p>
      </div>
      <div className="flex gap-5 items-center mt-10 sm:justify-evenly">
        <div className="flex items-center py-2 px-4 gap-2 rounded-full border-2 ">
          <Logo path="img/dotnet.png" className="h-5" />
          <Anchor linkTo="" className="" label="DOTNET" />
        </div>
        <div className="flex items-center gap-2 py-2 px-4 rounded-full border-2">
          <Logo path="img/react.png" className="h-5" />
          <Anchor linkTo="" className="" label="ReactJS" />
        </div>
      </div>
    </div>
  );
};
