import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      login(res.data);
      navigate("/");
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Registration failed";
      setError(message);
    }
  };

  return (
    <div className="rounded-lg flex items-center justify-center py-12 bg-blue-100">
      <div className="bg-white dark:bg-purple-500 rounded-lg shadow-md flex w-full max-w-4xl overflow-hidden">
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2 text-purple-500 dark:text-white">
            Register
          </h2>
          <p className="text-sm mb-6 text-purple-500 dark:text-white">
            Join Reasonate by creating your account.
          </p>

          {error && (
            <p className="text-red-600 dark:text-blue-300 text-sm mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded p-2 dark:text-purple-500 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded p-2 dark:text-purple-500 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded p-2 dark:text-purple-500 bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-full bg-primary text-purple-500 dark:text-white py-2 rounded hover:bg-purple-800 hover:text-white border dark:border-gray-300">
              Register
            </button>
          </form>

          <div className="flex items-center gap-2 my-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-purple-500 dark:text-white">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center gap-2 dark:text-white hover:bg-purple-800 hover:text-white text-purple-500 dark:border-gray-300">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Register with Google
          </button>

          <div className="mt-4 flex justify-between text-sm">
            <a
              href="#"
              className="text-purple-500 dark:text-white hover:underline"
            >
              Forgot your password?
            </a>
            <a
              href="/login"
              className="text-purple-500 dark:text-white hover:underline"
            >
              Login
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/assets/login-art.png"
            alt="Login art"
            className="object-cover h-full w-full block dark:hidden"
          />
          <img
            src="/assets/login-art-dark.png"
            alt="Login art dark"
            className="object-cover h-full w-full hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}
