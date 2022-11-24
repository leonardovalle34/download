const express = require ("express");
const app = express();
const  cors = require('cors');

app.use(cors());


app.get("/download", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValle.pdf')
});
app.get("/downloadeng", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValleEng.pdf')
});

app.listen(3333, ()=>console.log(`Servidor rodando`))

