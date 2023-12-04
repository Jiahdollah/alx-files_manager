const redis = require('redis');

class RedisClient {
  constructor() {
    const client = redis.createClient();
    client.on('error', (err) => {
      console.error('Redis client error:', err);
    });
    this.client = client;
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const value = await this.client.get(key);
    return value === null ? null : JSON.parse(value);
  }

  async set(key, value, duration) {
    await this.client.set(key, JSON.stringify(value), 'EX', duration);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;
