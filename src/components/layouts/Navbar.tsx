import {
  Blend,
  ChartCandlestick,
  ClockFading,
  Cylinder,
  FileDiff,
  FolderSymlink,
  House,
  LayoutGrid,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="border-r-gray-200 border-r-2 px-8 py-24 flex flex-col gap-2 justify-between">
        <img src={logo} alt="logo" className="w-10" />

        <div>
          <section className="flex flex-col gap-2 justify-center">
            <div className="bg-gray-200 p-2 rounded-md cursor-pointer">
              <House />
            </div>
            <div className="hover:text-violet-700 p-2 rounded-md cursor-pointer">
              <LayoutGrid />
            </div>
            <div className="hover:text-violet-700 p-2 rounded-md cursor-pointer">
              <ClockFading />
            </div>
            <div className="hover:text-violet-700 p-2 rounded-md cursor-pointer">
              <FileDiff />
            </div>
            <div className="hover:text-violet-700 p-2 rounded-md cursor-pointer">
              <FolderSymlink />
            </div>
          </section>

          <hr className="my-8" />

          <section className="flex flex-col justify-center gap-2">
            <div className="p-2 rounded-md cursor-pointer">
              <Blend className="hover:text-red-500 text-red-300" />
            </div>
            <div className="p-2 rounded-md cursor-pointer">
              <Cylinder className="hover:text-blue-500 text-blue-300" />
            </div>
            <div className="p-2 rounded-md cursor-pointer">
              <ChartCandlestick className="hover:text-green-500 text-green-300" />
            </div>
          </section>
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/rob.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </>
  );
};
