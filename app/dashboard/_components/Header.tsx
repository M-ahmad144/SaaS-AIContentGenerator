import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center bg-white p-4 px-4 border-b-10">
      <div className="flex items-center gap-2 bg-white p-2 border rounded-md max-w-lg">
        <Search />
        <input type="text" placeholder="Search...." className="outline-none" />
      </div>
      <div></div>
      <h2 className="bg-primary px-4 py-2 rounded-full text-white text-xs">
        Join Membership for just $9.99/Month
      </h2>
    </div>
  );
}

export default Header;
