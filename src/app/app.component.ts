import { Component, OnInit } from '@angular/core';
import { PersonaModelo } from './modelo/persona.modelo';
import { LogginService } from './service/loggin.service';
import { AyudaService } from './ayuda.service';
import { PersonasService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado de personas';
  personas: PersonaModelo[] = []; 

  constructor(private logginService:LogginService, private ayudaService:AyudaService, private personasService:PersonasService){}

  personaAgregada(event:PersonaModelo){ 
    this.logginService.imprimirConsola("AppComponent agregarPersona()");
    this.ayudaService.procesar();
    //this.personas.push(event); 
    this.personasService.agregarPersona(event);
  }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  /*persona: PersonaModelo = new PersonaModelo(); 
  agregarPersona() { 
  let item:PersonaModelo = Object.assign({}, this.persona); 
  this.personas.push(item); 
  this.persona.limpiar();  
  }
  /*personas: PersonaModelo[] = [
      new PersonaModelo('Jose', 'Paz','43234423'),
      new PersonaModelo('Luis','Panta','87987665'),
      new PersonaModelo('Bryan', 'Lopez','03424532'),
      new PersonaModelo('Kevin','Guzman','42424355'),
];
  nombresInput: string = ''; 
  apellidosInput: string = ''; 
  dniInput: string = ''; 

  agregarPersona() { 
    let persona = new PersonaModelo(this.nombresInput,this.apellidosInput,this.dniInput); 
    this.personas.push(persona); 
    this.nombresInput = ''; 
    this.apellidosInput = ''; 
    this.dniInput = ''; 
  } */
}
