import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.css']
})
export class NuevoEventoAbiertoComponent implements OnInit {

  nombre: string
  fechaDesde: string
  locacion: string

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
  }

  nuevoEvento() {
    this.eventoService.nuevoEventoAbierto(this.nombre, this.fechaDesde, this.locacion)
  }

}
