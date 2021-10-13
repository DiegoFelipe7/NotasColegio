import { Injectable } from '@angular/core';
import{InMemoryDbService} from "angular-in-memory-web-api";
import {Estudiante} from "./estudiante";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const estudiantes=[
    {id: 1, nombre: "Juan",apellido:"Perez", identificacion: 1021, nota1:0, nota2:0,  nota3:0, materia:"Sociales"},
  ];
  return {estudiantes};
}
genId(estudiantes: Estudiante[]):number{
  return estudiantes.length>0 ? Math.max(...estudiantes.map(estudiante=>estudiante.id))+1:11;
}
  constructor() { }
}
