import { Component, ElementRef, EventEmitter, OnInit, Output,ViewChild } from '@angular/core'; 
import { PersonaModelo } from '../modelo/persona.modelo'; 
import { LogginService } from '../service/loggin.service';
import { PersonasService } from '../service/persona.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent{
  //@Output() personaCreada = new EventEmitter<PersonaModelo>(); 
  @ViewChild('nombresInput') nombresInput:ElementRef;
  @ViewChild('apellidosInput') apellidosInput:ElementRef;
  @ViewChild('dniInput') dniInput:ElementRef;
  @ViewChild('btnGuardar') btnGuardar:ElementRef;
  btnGuardarTexto:String = "+";

  constructor(private logginService:LogginService, private personasService:PersonasService){
    this.personasService.PersonaEditId.subscribe((indice:number) => this.obtenerPersona(indice))
  }

  agregarPersona() { 
    let persona = new PersonaModelo(); 
    persona.nombres = this.nombresInput.nativeElement.value;
    persona.apellidos = this.apellidosInput.nativeElement.value;
    persona.dni = this.dniInput.nativeElement.value;
    this.nombresInput.nativeElement.value = "";
    this.apellidosInput.nativeElement.value = "";
    this.dniInput.nativeElement.value = "";
    this.personasService.agregarPersona(persona);
    this.logginService.imprimirConsola("Metodo agregarPersona() "+persona.dni);
    //this.personaCreada.emit(persona);
    } 

    obtenerPersona(indice:number){
      let persona = this.personasService.personas[indice]; 
      this.nombresInput.nativeElement.value = persona.nombres;
      this.apellidosInput.nativeElement.value = persona.apellidos;
      this.dniInput.nativeElement.value = persona.dni;
      this.btnGuardarTexto =  "+";
      //this.btnGuardar.nativeElement.textContent = "Actualizar";
    }
/*persona: PersonaModelo = new PersonaModelo(); 
  @Output() personaCreada = new EventEmitter<PersonaModelo>(); 
  agregarPersona() { 
  let item:PersonaModelo = Object.assign({}, this.persona); 
  this.persona.limpiar();  
  this.personaCreada.emit(item);*/

/*agregarPersona(nombresInput:HTMLInputElement,apellidosInput:HTMLInputElement,dniInput:HTMLInputElement) { 
  let persona = new PersonaModelo(); 
  persona.nombres = nombresInput.value;
  persona.apellidos = apellidosInput.value;
  persona.dni = dniInput.value;
  nombresInput.value = "";
  apellidosInput.value = "";
  dniInput.value = "";
  this.personaCreada.emit(persona);
  }*/
}
