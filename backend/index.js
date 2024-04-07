const express = require("express");
const cors = require("cors")
const miniRouter = require("./routes/index")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", miniRouter);

app.listen(3000,()=>{
    console.log("Server listining at port 3000");
})