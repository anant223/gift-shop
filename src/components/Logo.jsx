import {Gift} from "lucide-react"




const Logo = () => {
  return (
    <div className="flex">
      <Gift className=" text-red-400 lg:h-10 lg:w-8 h-9 w-6" />
      <h1 className="text-2xl  lg:text-3xl font-bold font-cairo text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-400 mt-[3.5px]">
        Gifter
      </h1>
    </div>
  );
};

export default Logo;


