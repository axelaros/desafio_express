const express=require("express")
const classContainer=require("./desafio/container/archivos.container")

const app=express();

const PORT= 8090

const archivo= new classContainer("productos.txt")

app.get("/products", async (req,res)=>{

    const prods=await archivo.leer()
    console.log(prods);


    res.send({productos:prods})
})

app.get("/random",async(req,res)=>{
    const prods=await archivo.leer()
    const random= parseInt(Math.random()* prods.length)
    res.send({productos:prods[random]})
})





const server=app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto:${PORT}`);
})
