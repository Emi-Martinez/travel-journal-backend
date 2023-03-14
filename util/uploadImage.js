async function uploadImage(img){
    const dir = __dirname.slice(0, __dirname.length-5)
    let uploadPath = `${dir}/images/${img.name}`

    console.log(dir)

    try {
        await img.mv(uploadPath)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {uploadImage}