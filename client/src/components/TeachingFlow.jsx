// ✅ src/components/TeachingFlow.jsx
import { useState } from 'react'

export default function TeachingFlow({ lesson }) {
  const [agreedDefs, setAgreedDefs] = useState({})
  const [stepIndex, setStepIndex] = useState(0)

  const allDefinitionsAgreed = Object.keys(agreedDefs).length === lesson.definitions.length

  const handleAgree = (term) => {
    setAgreedDefs(prev => ({ ...prev, [term]: true }))
  }

  return (
    <div>
      {!allDefinitionsAgreed && (
        <div className="space-y-4">
          {lesson.definitions.map((d, i) => (
            <div key={i} className="border p-4 rounded">
              <p><strong>{d.term}:</strong> {d.definition}</p>
              {!agreedDefs[d.term] && (
                <button
                  className="mt-2 px-4 py-1 bg-primary text-black rounded"
                  onClick={() => handleAgree(d.term)}
                >
                  I understand
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {allDefinitionsAgreed && (
        <div className="mt-8">
          <p className="mb-4">{lesson.steps[stepIndex].content}</p>
          {stepIndex < lesson.steps.length - 1 ? (
            <button
              className="bg-accent text-black px-4 py-2 rounded"
              onClick={() => setStepIndex(stepIndex + 1)}
            >
              Continue
            </button>
          ) : (
            <p className="text-green-600 font-semibold">✅ You've completed the lesson.</p>
          )}
        </div>
      )}
    </div>
  )
}
