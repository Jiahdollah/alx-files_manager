// controllers/AppController.js
const { getRedisStatus, getDBStatus, countUsers, countFiles } = require('../utils');

const AppController = {
  getStatus: async (req, res) => {
    try {
      const redisStatus = await getRedisStatus();
      const dbStatus = await getDBStatus();

      res.status(200).json({
        redis: redisStatus,
        db: dbStatus,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStats: async (req, res) => {
    try {
      const usersCount = await countUsers();
      const filesCount = await countFiles();

      res.status(200).json({
        users: usersCount,
        files: filesCount,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AppController;
