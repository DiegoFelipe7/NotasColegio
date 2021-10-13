import { NgModule } from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import{EstudianteDetalleComponent} from "./estudiante-detalle/estudiante-detalle.component";
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

const routes: Routes=[
  {path:'estudiantes',component:EstudiantesComponent},
  {path:'detalle/:id',component:EstudianteDetalleComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
