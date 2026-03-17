class Persona { 
    nombre = '';
    apellido = '';
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saludar();
    }
    saludar() {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
}

const persona1 = new Persona('Juan', 'Perez');

export default Persona;