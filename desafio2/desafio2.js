const { log } = require('console');
const fs = require('fs');

class Contenedor {
    constructor(name){
        this.name = name;
    }

    save = async (obj) => {
        try {
            const contJson = await this.getAll();
            let ultIndice = contJson.length - 1
            let ultId = contJson[ultIndice].id
            obj.id = ultId + 1
            let id = obj.id
            contJson.push(obj)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contJson))
            console.log(id)
            return id
        } 
        catch (error) {
            console.log(error)
        } 
    }
    
     getById = async (id) =>{
        try{
            const contJson = await this.getAll();
            let contArray  
            contJson.forEach(element => {
                if (element.id === id) {                      
                    contArray = element                                         
                }                            
            }); 

            console.log(contArray)
            return contArray           
        }
        catch (error) {
            console.log(error)
        }
    }

    getAll = async () => {
        try {
            const data = await fs.promises.readFile(`./${this.name}`, `utf-8`); 
                                
            return JSON.parse(data)
        }
        catch (error) {
            console.log(error)
        } 
    }
    
    deleteById = async (id) =>{
        try {
            const contJson = await this.getAll();
            const index = id - 1
            contJson.splice(index,1);
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contJson))
        }        
        catch (error) {
            console.log(error)
        }
    };

    deleteAll = async() =>{
        try {
            let contJson = await this.getAll();
            contJson = [];
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contJson))

        }
        catch (error) {
            console.log(error)
        }
    } 
}


let contenedor = new Contenedor('productos.json')

const prod3 = {
    "id": 1,
    "title": "producto3",
    "price": 300
}

contenedor.save(prod3)
//contenedor.getById(1)
//contenedor.getAll()
//contenedor.deleteById(4)
//contenedor.deleteAll();