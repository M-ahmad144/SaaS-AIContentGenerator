"use client";

import { FileClock, Home, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const Menulist = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
  ];
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="bg-white shadow-sm p-4 border w-[95%] overflow-y-scroll">
      <div className="flex justify-center">
        <img src="/logo.svg" alt="logo" width={120} height={90} />
      </div>
      <hr className="my-3 border" />
      <div className="mt-3">
        {Menulist.map((menu) => (
          <div
            key={menu.path}
            onClick={() => router.push(menu.path)}
            className={`flex gap-2 mb-2 p-3
              hover:bg-primary hover:text-white rounded-lg cursor-pointer
              ${currentPath === menu.path ? "bg-primary text-white" : ""}
            `}
          >
            <menu.icon />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
