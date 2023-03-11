const { createMessageError } = require("../util/createMessageError")

const errorHandler = async (error, req, res, next) => {
    if(error.code === 'ER_DATA_TOO_LONG' || error.code === 'ER_TRUNCATED_WRONG_VALUE'){
        const message = createMessageError(error)
        
        return res.status(400).json({succes: false, errorMessage: message})
    }
    if(error.message === "Cannot read properties of null (reading 'img')"){
        const message = "You must select an image to add a location."
        
        return res.status(400).json({succes: false, errorMessage: message})
    }

    return res.status(500).json({succes: false, errorMessage: "Something went wrong"})
}

module.exports = {errorHandler}