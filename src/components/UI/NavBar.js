import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full p-4 border-b flex items-center justify-between border-solid border-slate-300">
      <div className="text-2xl flex items-center font-medium">
        <span className="">Zawali</span> <p>Shop</p>
      </div>
      <div className="flex items-center gap-5">
        <li className="font-medium ">home</li>
        <li className="font-medium ">dashboard</li>
      </div>
    </nav>
  );
}
