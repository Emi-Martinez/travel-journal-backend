class dataToLongError extends Error {
    constructor(message){
        super(message)
        this.errorCode = "dataToLong"
        this.statusCode = 400
    }
}

module.exports = dataToLongError