import { EventEmitter, Injectable } from '@angular/core';
import { PersonaModelo } from "../modelo/persona.modelo";
import { LogginService } from './loggin.service';

@Injectable()
export class PersonasService {
    personas:PersonaModelo[] = [];
    PersonaEditId = new EventEmitter<number>();

    constructor(private logginService:LogginService){

    }
    agregarPersona(persona:PersonaModelo){
        this.logginService.imprimirConsola("PersonasService agregarPersona "+persona.dni);
        this.personas.push(persona);
    }
}