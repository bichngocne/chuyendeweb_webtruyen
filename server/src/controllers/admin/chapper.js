import {chapper} from '../../models/index.js';
const index = async (req, res) => {
  try {
    const chappers = await chapper.findAll();
    return res.json({ chappers });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export default {index}