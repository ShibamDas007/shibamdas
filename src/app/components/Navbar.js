"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  // Map paths to nav item names
  const pathToName = {
    "/": "_hello",
    "/about": "_about_me",
    "/projects": "_projects",
  };

  // Initialize navbar state based on current path
  const [navbar, setNavbar] = useState(pathToName[pathname] || "_hello");
  
  // Update navbar state when pathname changes
  useEffect(() => {
    setNavbar(pathToName[pathname] || "_hello");
  }, [pathname]);

  const selectedNav = (option) => {
    setNavbar(option);
  };

  const navItems = [
    { name: "_hello", path: "/" },
    { name: "_about_me", path: "/about" },
    { name: "_projects", path: "/projects" },
  ];

  return (
    <div
      className="bg-[#0D1117] text-gray-300 h-12 w-full flex flex-col items-center text-sm shadow-sm"
      style={{ boxShadow: "0 4px 6px rgba(1, 4, 9, 0.5)" }}
    >
      <div className="flex md:w-full bg-[#010409]">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`p-2 md:px-12 px-6 cursor-pointer ${
                navbar === `${item.name}`
                  ? "bg-[#0D1117] border-r border-t border-gray-600 text-orange-300"
                  : "border-r border-t border-b border-gray-600"
              } `}
              onClick={() => {
                selectedNav(item.name);
              }}
            >
              <span
                className={`${navbar === `${item.name}` ? "" : "opacity-50"}`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:block h-full w-full border-t border-b border-gray-600"></div>
      </div>
    </div>
  );
}