import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const Moon = dynamic(() => import("../../icons/Moon"), { ssr: false });
const Sun = dynamic(() => import("../../icons/Sun"), { ssr: false });

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    // @ts-ignore
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <nav className="dark:bg-primary-900 bg-primary-200">
      <div className="mx-auto container px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between px-4">
            <div className="flex-shrink-0">
              <Link href="/" className="text-primary-700 dark:text-white  font-bold text-2xl">
                Movie Scope
              </Link>
            </div>
            <div className=" sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-primary-700 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-700 hover:text-primary-800 block px-3 py-2 rounded-md text-base outline-none font-medium"
                >
                  {darkMode === "light" ? <Moon className="w-6 h-6 " /> : <Sun className="w-6 h-6 " />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
