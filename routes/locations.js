const express = require('express')
const {
    getLocations,
    getLocation,
    addLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/locations')
const { errorHandler } = require('../middleware/errorHandler')
const { tryCatch } = require('../util/tryCatch')


const route = express.Router()

route.get('/api/locations/', getLocations)
route.get('/api/locations/:email', getLocations)
route.post('/api/locations', tryCatch(addLocation), errorHandler)

route.get('/api/locations/:id', getLocation)
route.put('/api/locations/:id', tryCatch(updateLocation), errorHandler)
route.delete('/api/locations/:id/:email', tryCatch(deleteLocation), errorHandler)

module.exports = {route}