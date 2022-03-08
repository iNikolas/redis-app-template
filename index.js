const express = require('express'),
    axios = require('axios'),
    cors = require('cors'),
    Redis = require('redis'),
    app = express(),
    redisClient = Redis.createClient()

module.exports = redisClient

const getOrSetCache = require("./getOrSetCache");

(async () => await redisClient.connect())()

redisClient.on('connect', () => console.log('::> Redis Client Connected'));
redisClient.on('error', (err) => console.log('<:: Redis Client Error', err));

app.use(cors())

app.get('/photos', async (req, res) => {
    const albumId = req.query.albumId
    const redisKey = `photos?albumId=${albumId}`

    const data = await getOrSetCache(redisKey, () => axios.get('https://jsonplaceholder.typicode.com/photos', {params: {albumId}}))

    res.json(data)
})

app.get('/photos/:id', async (req, res) => {
    const photoId = req.params.id
    const redisKey = `photos:${photoId}`

    const data = await getOrSetCache(redisKey, () => axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`))

    res.json(data)
})

app.listen(4000)