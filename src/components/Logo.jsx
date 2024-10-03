import {Gift} from "lucide-react"




const Logo = () => {
  return (
    <div className="flex p-2">
      <Gift className=" text-red-400 h-10 w-9" />
      <h1 className="lg-text-4xl text-3xl font-bold font-cairo text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-400 mt-[3.5px]">
        Gifter
      </h1>
    </div>
  );
};

export default Logo;


