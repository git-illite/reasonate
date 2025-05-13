import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      {user ? (
        <div className="relative ml-4" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full overflow-hidden border-2 border-white w-8 h-8"
          >
            <img
              src="/assets/default-avatar.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-md text-sm z-50">
              <div className="px-4 py-3 border-b dark:border-gray-700">
                <p className="font-semibold dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="ml-4 px-4 py-2 text-sm border rounded text-white hover:bg-white hover:text-black"
        >
          Login
        </button>
      )}
    </nav>
  );
}
