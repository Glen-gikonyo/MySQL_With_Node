const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const studentRoutes = require('./routes/studentRoutes')

var corOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",studentRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})