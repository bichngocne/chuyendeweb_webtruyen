import {user} from '../../models/index.js';
const index = async (req, res) => {
    try {
      const users = await user.findAll({
        where: {
            id_role: [1, 2],
          }
      });
      return res.json({ users });
    } catch (error) {
      console.error("Error retrieving stories:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
async function getUserOfRoleById(req, res) {
    try {
      // const id = decodeURIComponent(req.params.id);
      const decryptedStoryID = req.params.id;//decryptData(id,process.env.SEVER_SECRET_KEY_ID_STORY || 'this is secret');
      const foundRole = await user.findOne({
        where: { id: decryptedStoryID },
      });
      res.json({ foundRole });
    } catch (error) {
      console.error("Lỗi khi truy vấn dữ liệu:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

export default {index,getUserOfRoleById}