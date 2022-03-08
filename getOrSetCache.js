const redisClient = require("./index")
const DEFAULT_EXPIRATION_SEC = 3600

const getOrSetCache = (key, callback) => {
    return new Promise(async (resolve, reject) => {
        try {
            const redisCache = await redisClient.GET(key)

            if (redisCache) return resolve(JSON.parse(redisCache))

            const {data} = await callback()
            await redisClient.SETEX(key, DEFAULT_EXPIRATION_SEC, JSON.stringify(data))

            return resolve(data)
        } catch (error) {
            return reject(error)
        }
    })
}

module.exports = getOrSetCache