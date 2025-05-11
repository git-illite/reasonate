import mongoose from "mongoose";

const DefinitionSchema = new mongoose.Schema({
  term: String,
  definition: String,
});

const StepSchema = new mongoose.Schema({
  id: Number,
  content: String,
});

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    definitions: [DefinitionSchema],
    steps: [StepSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model("Lesson", LessonSchema);
export default Lesson;
