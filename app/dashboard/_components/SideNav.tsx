"use client";

import { CreditCard, FileClock, Home, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function SideNav() {
  const Menulist = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Billing",
      icon: CreditCard,
      path: "/billing",
    },
  ];

  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm p-4 dark:border-gray-700 border-r w-64 h-full">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <img
          src="/logo.svg"
          alt="logo"
          width={120}
          height={90}
          className="dark:invert"
        />
      </div>

      <hr className="my-3 border-gray-200 dark:border-gray-700" />

      {/* Main Navigation */}
      <div className="flex-1">
        {Menulist.map((menu) => (
          <div
            key={menu.path}
            onClick={() => router.push(menu.path)}
            className={`flex items-center gap-3 mb-2 p-3 rounded-lg transition-all
              hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-700 cursor-pointer
              ${
                currentPath === menu.path
                  ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400 font-medium"
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            <menu.icon className="w-5 h-5" />
            <span className="text-sm">{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
