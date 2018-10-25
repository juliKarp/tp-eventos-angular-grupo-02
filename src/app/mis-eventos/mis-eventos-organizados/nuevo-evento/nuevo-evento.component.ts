import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';
import Locacion from 'src/domain/locacion';
import Usuario from 'src/domain/usuario';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html'
})
export class NuevoEventoComponent implements OnInit {

  nombre: string
  fechaMaximaConfirmacion: string
  fechaDesde: string
  fechaHasta: string
  locacion: Locacion
  organizador: Usuario

  locacionesDisponibles: Locacion[] = []

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.locacionesDisponibles = this.eventoService.locaciones
  }

  nuevoEvento() {
    const evento = this.eventoService.crearEventoAbierto(this.nombre, this.fechaMaximaConfirmacion, this.fechaDesde, this.fechaHasta, this.locacion)
    this.eventoService.agregarEvento(evento)
    this.limpiarCampos()
  }

  limpiarCampos() {
    this.nombre = null
    this.fechaMaximaConfirmacion = null
    this.fechaDesde = null
    this.fechaHasta = null
    this.locacion = null
    this.organizador = null
  }

}
