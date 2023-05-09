const express = require("express");
const {PORT} = require("./config/serverConfig")
const app = express();



const SERVER =()=>{

    app.listen(PORT,()=>{
        
        console.log(`SERVER RUNNING AND LISTENING ON PORT: ${PORT}`)
    })

}

SERVER()