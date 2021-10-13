import { Component, OnInit } from '@angular/core';
import {Estudiante} from "../estudiante";
import{EstudianteService} from "../estudiante.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'DFM-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
   
  contacto:FormGroup;
  submitted=false;
  estudiantes:Estudiante[];
  estudiante : Estudiante;
  seleccionar(item: Estudiante ):void{
    this.estudiante = item;
  }
 
  constructor(private estudianteService :EstudianteService , private formBuilder : FormBuilder ) { }
   getEstudiantes():void{
   this.estudianteService.getEstudiantes().subscribe(estudiantes=>this.estudiantes = estudiantes); 
  }
  ngOnInit() {
    this.getEstudiantes();
    this.contacto = this.formBuilder.group({
      nombre: ['', Validators.required],            
      apellido: ['', Validators.required],
      identificacion: ['', Validators.required],
       materia: ['', Validators.required]
    
  });
  }
  get f(){return this.contacto.controls;}

  onSubmit(){
    this.submitted=true;
    if(this.contacto.invalid){
      return;
    }else{
      alert('Datos almacenados')
    }
  }
  nuevo(nombre:string , apellido:string,identificacion:number, nota1:number, nota2:number , nota3:number , materia:string):void{
    nombre=nombre.trim();
    apellido=apellido.trim();
    identificacion=identificacion;
    nota1=0;
    nota2=0;
    nota3=0;
    materia=materia.trim();
    if(!nombre){
      return
    }else if(!apellido){
      return
    }
    else if(!identificacion){
      return
    }else if(!materia){
      return
    }else{
      this.estudianteService.crearNuevo({nombre,apellido,identificacion,nota1,nota2,nota3,materia} as Estudiante)
      .subscribe(estudiante=>{this.estudiantes.push(estudiante);
      })
    }
  }

  

  borrar(estudiante : Estudiante):void{
    this.estudiantes = this.estudiantes.filter(h => h !== estudiante);
    this.estudianteService.borrarEstudiante(estudiante).subscribe();
  }

}
