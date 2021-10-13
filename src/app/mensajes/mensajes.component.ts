import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'DFM-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public mensajeService:MensajeService) { }

  ngOnInit() {
  }

}
