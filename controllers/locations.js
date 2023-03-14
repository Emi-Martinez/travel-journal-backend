const location = require('../models/Location')
const {uploadImage} = require('../util/uploadImage')
const {deleteImage} = require('../util/deleteImage')

const getLocations = async (req,res)=>{
    try {
        const {email} = req.params

        let [locs] = email ? await location.getAllLocations(email) : await location.getAllLocations()

        res.status(200).json({succes: true,data: locs})
    } catch (error) {
        console.log(error)
    }  
}

const getLocation = async (req,res)=>{
    try {
        const {id} = req.params
        const [location] = await location.getLocationByID(id)

        if(location.length === 0){
            return res.status(404).json({succes: false, msg: `Location ${id} not found!`})
        }

        res.status(200).json({succes: true, data: location})
    } catch (error) {
        console.log(error)
    }
}

// post location
const addLocation = async (req,res)=>{
        const newLoc = req.body
        const img = req.files.img
            
        await uploadImage(img)

        const newLocation = new location({
            ...newLoc,
            imageURL: `/${img.name}`,
            location: newLoc.location.toUpperCase(),
            dateStar: newLoc.dateStar,
            dateFinish: newLoc.dateFinish

        })

        await newLocation.insertLocation()

        const [newLocations] = await location.getAllLocations(newLoc.email)

        return res.status(200).json({succes: true,data: newLocations})    
}

const updateLocation = async (req,res)=>{
    const {id} = req.params
    const {updatedLocation} = req.body

    let updLocation = new location({...updatedLocation, 
        id: id, 
        dateStar: updatedLocation.dateStar,
        dateFinish: updatedLocation.dateFinish
    })

    await updLocation.updLocation()

    const [newLocations] = await location.getAllLocations(updatedLocation.email)

    res.status(200).json({succes: true, data: newLocations})
}

const deleteLocation = async (req,res)=>{

    const {id,email} = req.params
    const [loc] = await location.getLocationByID(id)
    const {imageURL} = loc[0]
    
    await deleteImage(imageURL)
    await location.dltLocation(id)

    const [newLocations] = await location.getAllLocations(email)

    res.status(200).json({succes: true, data: newLocations})  
}

module.exports = {
    getLocations,
    getLocation,
    addLocation,
    updateLocation,
    deleteLocation
}

