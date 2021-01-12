const express = require('express')
const cors = require('cors')
const app = express()
    // var corsOptions = {
    //     origin: 'http://localhost:2222',
    //     optionsSuccessStatus: 200 
    // }
app.use(cors())
app.use(express.json())
app.get('/comment', (req, res) => {
    res.json({ vien: "levien" })
})
app.listen(1111, () => {
    console.log("Comment service listen port 1111 !")
})