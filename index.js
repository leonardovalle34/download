const express = require ("express");
const app = express();
/*const port = process.env.PORT || 3500;
const  cors = require('cors');

app.use(cors());


app.get("/download", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValle.pdf')
});
app.get("/downloadeng", (req,res)=>{
    res.download(__dirname + '/Public/CV2023devLeonardoValleEng.pdf')
});

app.listen(port, ()=>console.log(`http://localhost:${port}`))*/

app.get("/",(req,res)=>{
    try{
        console.log("sucesso")
    }catch(err){
        console.log(err)
    }
    res.send("server is up teste");
})

app.listen(3333, ()=>console.log("Servidor rodando"))