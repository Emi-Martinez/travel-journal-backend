const {unlink} = require('fs').promises

async function deleteImage(imgURL){
    const dir = __dirname.slice(0, __dirname.length-5)
    let deletePath = `${dir}/images/${imgURL}`

    try {
        await unlink(deletePath)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {deleteImage}