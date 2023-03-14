const con = require('../db/Connection')

class Location {
    constructor(loc) {
        this.id = loc.id
        this.imageURL = loc.imageURL
        this.location = loc.location
        this.googleMapsUrl = loc.googleMapsUrl
        this.title = loc.title
        this.dateStar = loc.dateStar
        this.dateFinish = loc.dateFinish
        this.descript = loc.descript
        this.email = loc.email
    }

    static getAllLocations(email = 'default'){
        const query = `SELECT id,imageURL,location,googleMapsUrl,title,date_format(dateStar, "%d %b, %Y") as dateStar,date_format(dateFinish, "%d %b, %Y") as dateFinish,descript from location WHERE email = '${email}'`

        return con.query(query)
    }

    static getLocationByID(id){
        const query = `SELECT * FROM location WHERE id = ${id}`

        return con.query(query)
    }

    static dltLocation(id){
        const query = `DELETE FROM location WHERE id = ${id}`

        return con.query(query)
    }

    async insertLocation(){
        const query = `INSERT INTO location(imageURL, location, googleMapsUrl, title, dateStar, dateFinish, descript, email) 
                VALUES(
                    '${this.imageURL}',
                    '${this.location}',
                    '${this.googleMapsUrl}',
                    '${this.title}',
                    '${this.dateStar}',
                    '${this.dateFinish}',
                    '${this.descript}',
                    '${this.email}'
                )`

        return con.query(query)  
    }

    async updLocation(){
        const query = `UPDATE location
        SET imageUrl = '${this.imageURL}',
            location = '${this.location}',
            googleMapsUrl = '${this.googleMapsUrl}',
            title = '${this.title}',
            dateStar = '${this.dateStar}',
            dateFinish = '${this.dateFinish}',
            descript = "${this.descript}" 
            WHERE id = ${this.id}`

        return con.query(query)
    }

}
 module.exports = Location
