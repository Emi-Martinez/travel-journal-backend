function createMessageError(error){
    const fields = {
        imageUrl: "Image",
        location: "Location",
        googleMapsUrl: "Link google Maps",
        title: "Title",
        dateStar: "Initial date",
        dateFinish: "End date",
        descript: "Description",
    }

    if(error.code === 'ER_DATA_TOO_LONG'){
        for (let field in fields){
            if(error.message.includes(field)){
                return `Data in "${fields[field]}" to long.`
            }
        }
    }
    if(error.code === 'ER_TRUNCATED_WRONG_VALUE'){
        for (let field in fields){
            if(error.message.includes(field)){
                return `Incorrect data value: ${field}.`
            }
        }
    }
}

module.exports = {createMessageError}