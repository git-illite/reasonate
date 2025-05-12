import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-primary text-black px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold text-purple-500 dark:text-white"
      >
        Reasonate
      </Link>
      <div className="space-x-4">
        <NavLink
          to="/teach"
          className={({ isActive }) =>
            `hover:underline px-6 py-2 font-bold dark:text-white ${
              isActive
                ? "rounded bg-purple-300 dark:bg-gray-900 dark:text-white "
                : ""
            }`
          }
        >
          Teach
        </NavLink>
        <NavLink
          to="/debate"
          className={({ isActive }) =>
            `hover:underline px-6 py-2 font-bold dark:text-white${
              isActive
                ? "rounded bg-purple-300 dark:bg-gray-900 dark:text-white "
                : ""
            }`
          }
        >
          Debate
        </NavLink>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border px-3 py-1 rounded text-sm text-black dark:text-white"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
