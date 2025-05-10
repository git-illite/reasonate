import { useState } from "react";

export default function CreateLesson() {
  const [title, setTitle] = useState("");
  const [definitions, setDefinitions] = useState([
    { term: "", definition: "" },
  ]);
  const [steps, setSteps] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLesson = {
      title,
      definitions: definitions.filter((d) => d.term && d.definition),
      steps: steps.filter((s) => s).map((s, i) => ({ id: i + 1, content: s })),
    };
    console.log("✅ New Lesson:", newLesson);
    alert("Lesson logged to console.");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a Lesson</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Lesson Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Definitions</label>
          {definitions.map((d, i) => (
            <div key={i} className="mb-2 space-y-1 border p-2 rounded relative">
              <button
                type="button"
                className="absolute right-2 top-2 text-red-600"
                onClick={() => {
                  if (definitions.length > 1) {
                    setDefinitions(definitions.filter((_, idx) => idx !== i));
                  }
                }}
              >
                ✕
              </button>
              <input
                type="text"
                placeholder="Term"
                value={d.term}
                onChange={(e) => {
                  const newDefs = [...definitions];
                  newDefs[i].term = e.target.value;
                  setDefinitions(newDefs);
                }}
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                placeholder="Definition"
                value={d.definition}
                onChange={(e) => {
                  const newDefs = [...definitions];
                  newDefs[i].definition = e.target.value;
                  setDefinitions(newDefs);
                }}
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setDefinitions([...definitions, { term: "", definition: "" }])
            }
            className="text-blue-600 mt-1"
          >
            + Add Another Definition
          </button>
        </div>

        <div>
          <label className="block font-medium mb-2">Steps</label>
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <button
                type="button"
                className="absolute right-2 top-2 text-red-600"
                onClick={() => setSteps(steps.filter((_, idx) => idx !== i))}
              >
                ✕
              </button>
              <input
                type="text"
                value={s}
                placeholder={`Step ${i + 1}`}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[i] = e.target.value;
                  setSteps(newSteps);
                }}
                className="w-full border rounded p-2 mb-2 pr-8"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setSteps([...steps, ""])}
            className="text-blue-600 mt-1"
          >
            + Add Another Step
          </button>
        </div>

        <button
          type="submit"
          className="bg-primary text-black px-6 py-2 rounded"
        >
          Save Lesson
        </button>
      </form>
    </div>
  );
}
