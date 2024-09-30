import {Gift} from "lucide-react"




const Logo = () => {
  return (
    <div className="flex">
      <Gift className="h-8 w-8 text-primary text-red-400" />
      <h1 className="text-2xl font-bold font-cairo text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-400 mt-[3.5px]">
        Gifter
      </h1>
    </div>
  );
};

export default Logo;


