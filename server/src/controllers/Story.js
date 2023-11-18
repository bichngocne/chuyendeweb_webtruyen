import { story } from "../models/index.js";
const getAllStories = async (req, res) => {
  try {
    console.log("hih");
    const stories = await story.findAll();
    console.log(stories);
    return res.json({ stories });
  } catch (error) {
    console.error("Error retrieving story:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default {getAllStories};