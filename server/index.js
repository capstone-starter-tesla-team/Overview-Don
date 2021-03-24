const express = require("express");
const morgan =require("morgan")
const axios = require("axios")
const cors = require("cors")
const cmopression = require("compression")
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const compression = require("compression");


app.use(cors())
app.use(morgan("bev"))
app.use(compression())
app.use(express.static(path.join(__dirname, "../public")));
const token = "890d89c7452441ff6750dcc652670ea365836354"

app.get("overview/category",async (req,res)=>{
  try{
    const data= await axios.get(
      " https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products",
      {
        headers:{
          Authorization:token,
        },
      }
    );
    res.status(200).send(data.data.category)
  }catch(error){
    res.status(500).send(error)
  }

})


app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  });