import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Reasonate</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Learn and argue through step-by-step reasoning. Choose how you want to engage:
      </p>
      
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/teach')}
          className="bg-primary text-black px-6 py-2 rounded hover:bg-blue-800"
        >
          Start Learning
        </button>
        <button
          onClick={() => navigate('/debate')}
          className="bg-accent text-black px-6 py-2 rounded hover:bg-yellow-400"
        >
          Start Debating
        </button>
      </div>
    </div>
  )
}
