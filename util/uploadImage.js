async function uploadImage(img){
    const dir = __dirname
    let uploadPath = `${dir}\\images\\${img.name}`

    console.log(dir)

    try {
        await img.mv(uploadPath)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {uploadImage}