// controllers/AppController.js
import { users, files } from '../db'; // Assuming you have users and files collections in your database
import redisClient from '../utils/redis';

const AppController = {
  async getStatus(req, res) {
    const redisAlive = redisClient.isAlive();
    // Assume you have a function to check if the DB is alive (replace with your actual implementation)
    const dbAlive = await checkDb(); 

    res.status(200).json({ redis: redisAlive, db: dbAlive });
  },

  async getStats(req, res) {
    const userCount = await users.countDocuments();
    const fileCount = await files.countDocuments();

    res.status(200).json({ users: userCount, files: fileCount });
  },
};

// Mock function for checking if the DB is alive
async function checkDb() {
  // Replace this with your actual implementation
  // You may use a function to check the connection or perform a sample query
  // Return true if the DB is alive, otherwise false
  return true;
}

export default AppController;
