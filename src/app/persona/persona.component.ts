import { Component, Input, OnInit } from '@angular/core';
import { PersonaModelo } from '../modelo/persona.modelo';
import { PersonasService } from '../service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit { 
  @Input() persona: PersonaModelo; 
  @Input() indice:number; 

  constructor(private personasServices:PersonasService) { } 
  
  ngOnInit(): void { 
  } 
  editarPersona(){
    this.personasServices.PersonaEditId.emit(this.indice);
  }
}
