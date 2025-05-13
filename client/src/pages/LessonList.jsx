// ✅ src/pages/LessonList.jsx
import { Link } from "react-router-dom";
import lessons from "../data/lessons";
import { useAuth } from "../context/AuthContext";

export default function LessonList() {
  const { user, login, logout } = useAuth();
  if (user) {
    console.log("Logged in as:", user.name, " ", user.email);
  }
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Choose a Lesson</h1>
      <Link
        to="/teach/create"
        className="bg-primary text-black dark:text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        + New Lesson
      </Link>
      <ul className="space-y-4">
        {lessons.map((lesson, index) => (
          <li key={index} className="border p-4 rounded hover:bg-gray-50">
            <Link
              to={`/teach/${index + 1}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
