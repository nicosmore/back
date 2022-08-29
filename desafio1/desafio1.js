class Usuario {
    constructor(nombre, apellido, nombreLibro, autor, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{nombreLibro, autor}];
        this.mascotas = [mascota];
    }    
    
    getFullName(){
        return console.log(`Nombre Completo: ${this.nombre} `+`${this.apellido}`)
    };

    addMascota (mascota){
        this.mascotas.push(mascota); 
        console.log(this.mascotas);       
    };

    countMascotas () {        
        return  console.log(this.mascotas.length);  
    };

    addBook (nombreLibro, autor){
        this.libros.push({nombreLibro, autor});
        console.log(this.libros);
    };

    getBooksNames () {    
        let listaLibros = [];
        this.libros.map((e) =>{listaLibros.push(e.nombreLibro)});

            return console.log(listaLibros)
    }
};

const usuario1 = new Usuario ('Nicolas', 'Moreira','libro 1','autor 1','max');
console.log(usuario1);
usuario1.getFullName();
usuario1.addMascota('coco');
usuario1.countMascotas();
usuario1.addBook('libro 2','autor 2');
usuario1.getBooksNames();


