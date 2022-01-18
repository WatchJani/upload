const express = require("express")
const multer = require("multer")

const app = express()
let PORT = process.env.PORT || 5000


const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname)
    }
})

app.use(express.static(__dirname + "/public"))

const upload = multer({ storage: fileStorageEngine })


app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.send("poslano")
})


app.listen(PORT, () => {
    console.log(`server slusa na port ${PORT}`)
})