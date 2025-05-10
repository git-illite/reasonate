// ✅ src/pages/Teach.jsx
import { useParams } from 'react-router-dom'
import lessons from '../data/lessons'
import TeachingFlow from '../components/TeachingFlow'

export default function Teach() {
  const { id } = useParams()
  const lesson = lessons[parseInt(id) - 1] // assuming /teach/1 maps to first lesson

  if (!lesson) return <p className="p-6">Lesson not found.</p>

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
      <TeachingFlow lesson={lesson} />
    </div>
  )
}