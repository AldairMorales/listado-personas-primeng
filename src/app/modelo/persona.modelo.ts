export class PersonaModelo { 
    /*nombres: string = ''; 
    apellidos: string = ''; 
    dni: string = ''; 
    constructor(nombres: string, apellidos: string, dni: string) { 
    this.nombres = nombres; 
    this.apellidos = apellidos; 
    this.dni = this.dni; 
    }
    constructor(public nombres: string,public apellidos: string,public dni: string) {
    } */
    nombres?: string; 
    apellidos?: string; 
    dni?: string; 
    
    limpiar() { 
    this.nombres = ''; 
    this.apellidos = ''; 
    this.dni = ''; 
    }
}