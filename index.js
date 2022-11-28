const express = require ("express");
const app = express();
const  cors = require('cors');
const router = express.Router()

app.use(cors());

app.get("/index",(req,res, next)=>{
    res.sendFile(__dirname + "/src/index.html");

})
app.get("/download", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValle.pdf')
});
app.get("/downloadeng", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValleEng.pdf')
});

app.listen(3333, ()=>console.log(`Servidor rodando`))

