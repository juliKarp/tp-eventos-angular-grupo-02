import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';
import Locacion from 'src/domain/locacion';
import Usuario from 'src/domain/usuario';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.css']
})
export class NuevoEventoAbiertoComponent implements OnInit {

  nombre: string
  fechaMaximaConfirmacion: Date = new Date()
  fechaDesde: Date = new Date()
  fechaHasta: Date = new Date()
  locacion: Locacion
  cancelado: boolean = false
  postergado: boolean = false
  organizador: Usuario
  precio: number
  edadMinima: number

  locacionesDisponibles: Locacion[] = []

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.locacionesDisponibles = this.eventoService.locaciones
  }

  nuevoEvento() {
    const evento = this.eventoService.crearEventoAbierto(this.nombre, this.fechaMaximaConfirmacion, this.fechaDesde, this.fechaHasta, this.locacion, this.precio, this.edadMinima)
    this.eventoService.agregarEvento(evento)
  }

}
