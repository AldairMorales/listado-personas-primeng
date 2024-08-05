import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { PersonasService } from './service/persona.service';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { LogginService } from './service/loggin.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    TableModule,
    RippleModule
  ],
  providers: [LogginService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
