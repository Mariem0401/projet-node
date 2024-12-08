const express = require('express')
const App = express(); /*l'app est une instance d'express */
const fs = require('fs')
const dotenv =require('dotenv')
dotenv.config({path:"./config.env"});
const  mongoose =require('mongoose');
const userRoutes = require("./routes/userRoutes");

App.use(express.json());

const port = 7777 //num de port
App.listen(port,()=>{
    console.log(`App is running  on port ; ${port}...`)

}
); 
App.use('/users', userRoutes);
// connect to the data base 
const DB = process.env.DATABASE.replace("<db_password>",process.env.DATABASE_PASSWORD);
mongoose
.connect(DB)
.then((connection)=>{
    console.log("DB connected suc ");

})
.catch((err) => {
    console.log(err);
});



/*App.get('/msg', (req,res) => 
    {    res.send("This message from the server ")});
//App.listen(8080, () => {    console.log("Serveur à l'écoute")})
App.use(express.json());

var spec = JSON.parse(fs.readFileSync('./spec.json','utf-8'))  /*  lire le fichier */
/*App.get('/spec', (req,res) => {    
    res.status(200).json({
    
    
        status:"sucess", 
        resultat:spec.length ,
        data :{spec,},
    }
    )});

/*App.post("/spec",(req,res)=>{
console.log(req.body);
res.send("aaaaa")*/

/*const id =spec[spec.length -1 ].id+1;
const newspec= Object.assign({id:id}, req.body)
spec.push(newspec);
fs.writeFile('./spec.json',JSON.stringify(spec),err=> {
    res.status(201).json({
        status:"sucess", 
        newspec ,
    })
})
});*/



