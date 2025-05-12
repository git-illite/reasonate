import express from "express";
import Lesson from "../models/lessonModel.js";
import protect from "../middleware/protect.js";

const router = express.Router();

// GET all lessons (public)
router.get("/", async (req, res) => {
  const lessons = await Lesson.find().populate("user", "name email");
  res.json(lessons);
});

// GET lesson by ID (public)
router.get("/:id", async (req, res) => {
  const lesson = await Lesson.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!lesson) return res.status(404).json({ error: "Lesson not found" });
  res.json(lesson);
});

// POST lesson (protected)
router.post("/", protect, async (req, res) => {
  try {
    const newLesson = new Lesson({
      ...req.body,
      user: req.user._id, // ✅ link to authenticated user
    });

    const saved = await newLesson.save();

    // Optional: also push lesson to user's `lessonsCreated`
    req.user.lessonsCreated.push(saved._id);
    await req.user.save();

    res.status(201).json(saved);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create lesson", details: err.message });
  }
});

export default router;
