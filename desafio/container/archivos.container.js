class archivo{

constructor(nombre){
this.fs=require("fs")
this.nombre=nombre;
this.productos=[]

}

getNextId(){
    return this.productoslength +1
}

async guardar (prod){
    this.productos=await this.leer()

    prod.id=this.getNextId()
    this.productos.push(prod)

    try {
        await this.fs.promises.writeFile(this.nombre,JSON.stringify(this.productos,null,"\t"))
        console.log("producto guardado");
    } catch (error) {
        console.log(`error en guardar:${error}`);
    }

    }

    async leer(){
        try {
            let prods=await this.fs.promises.readFile(this.nombre,"utf-8")
            return JSON.parce(prods)
        } catch (error) {
            return []
        }
    }

    async borrar(){
        try {
            await this.fs.promises.unlink(this.nombre)
            console.log("productos borrados");
        } catch (error) {
            console.log(`error en borrar:${error}`);
        }
    }
    
}
module.exports=archivo