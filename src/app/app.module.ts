import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';
import{HttpClientModule} from '@angular/common/http';
import{HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import{InMemoryDataService} from "./in-memory-data.service";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EstudianteDetalleComponent,
    EstudiantesComponent,
    MensajesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
