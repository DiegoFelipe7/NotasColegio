import { Injectable } from '@angular/core';
import {Observable , of} from "rxjs";
import {Estudiante} from "./estudiante";
import{MensajeService} from "./mensaje.service";
import {HttpClient , HttpHeaders} from "@angular/common/http";
import{catchError, map , tap} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
   private estudiantesUrl='api/estudiantes';
  constructor(private mensajeService:MensajeService,
    private http:HttpClient) { }

    private registro(mensaje: string){
      this.mensajeService.agregar(`EstudianteService: ${mensaje}`);
     }
   
     private handleError<T>(operation ='operation',result?:T){
       return (error:any): Observable<T>=>{
        this.registro(`${operation} failed:${error.message}`);
        return of(result as T);
       }
     };

  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.estudiantesUrl)
    .pipe(
      tap(_ => this.registro('obtiene Estudiantes')),
      catchError(this.handleError<Estudiante[]>("getEstudiantes",[]))
    ); 
  }

  getEstudiante(id:number):Observable<Estudiante>{
    const url = `${this.estudiantesUrl}/${id}`;
    return this.http.get<Estudiante>(url)
    .pipe(
      tap(_=> this.registro(`Estudiante encontrado:${id}`)),
      catchError(this.handleError<Estudiante>(`getEstudiante id=${id}`))
    )
  }

  
  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }

  actualizar (estudiante : Estudiante):Observable<any>{
    return this.http.put(this.estudiantesUrl,estudiante,this.httpOptions).pipe(
      tap(_=> this.registro(`Estudiante actualizado id=${estudiante.id}`)),
      catchError(this.handleError<any>('actualizar'))
    );
  }

  
  crearNuevo(estudiante :Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.estudiantesUrl,estudiante,this.httpOptions).pipe(
      tap((nuevoEstudiante:Estudiante)=>this.registro(`Estudiante creado id:${nuevoEstudiante.id}`)),
      catchError(this.handleError<Estudiante>('crearNuevo'))
    );
  }
  
  borrarEstudiante(estudiante : Estudiante | number):Observable<Estudiante>{
    const id = typeof estudiante ==='number' ? estudiante : estudiante.id;
    const url = `${this.estudiantesUrl}/${id}`;
    return this.http.delete<Estudiante>(url,this.httpOptions).pipe(
      tap( _ => this.registro(`Estudiante eliminado:${id}`)),
      catchError(this.handleError<Estudiante>(`borrarEstudiante id=${id}`))
    );
  }

 

}
