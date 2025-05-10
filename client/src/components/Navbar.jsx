import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Reasonate</Link>
      <div className="space-x-4">
        <NavLink to="/teach" className={({ isActive }) => isActive ? 'underline' : ''}>
          Teach
        </NavLink>
        <NavLink to="/debate" className={({ isActive }) => isActive ? 'underline' : ''}>
          Debate
        </NavLink>
      </div>
    </nav>
  )
}
