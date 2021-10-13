import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Estudiante} from '../estudiante';
import{EstudianteService} from "../estudiante.service";
import {Location} from "@angular/common";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'DFM-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css']
})
export class EstudianteDetalleComponent implements OnInit {
  contacto2:FormGroup;
  submitted=false;
  review_btn=false;
 @Input() estudiante : Estudiante;
  constructor(
   private route:ActivatedRoute,
    private estudianteService:EstudianteService,
    private location:Location, private formBuilder : FormBuilder) { }
  getEstudiante():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.estudianteService.getEstudiante(id)
    .subscribe(estudiante => this.estudiante = estudiante);
  }
  
  regresar():void{
    this.location.back();
  }

  guardar():void{
    this.estudianteService.actualizar(this.estudiante)
    .subscribe(()=> this.regresar());
  }

  ngOnInit() {
  this.getEstudiante();
  this.contacto2 = this.formBuilder.group({
    nota1: ['', Validators.compose([Validators.min(0) , Validators.max(5) , Validators.maxLength(4)])],
    nota2: ['', Validators.compose([Validators.min(0) , Validators.max(5) , Validators.maxLength(4) ])],
    nota3: ['', Validators.compose([Validators.min(0) , Validators.max(5) , Validators.maxLength(4)])]
});
  }
  get f(){return this.contacto2.controls;}

  onSubmit(){
    this.submitted=true;
    if(this.contacto2.invalid){
      alert('Las Notas Esta incorrectas');
    }else{
     alert('Las Notas Estan correctas');
    }
  }

}
