import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';
import Locacion from 'src/domain/locacion';
import Usuario from 'src/domain/usuario';
import { Moment } from 'moment';
import { Time } from '@angular/common';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html'
})
export class NuevoEventoComponent implements OnInit {

  nombre: string
  fechaMaximaConfirmacion: Date
  fechaDesde: Date
  fechaHasta: Date
  horaMaximaConfirmacion: Time
  horaDesde: Time
  horaHasta: Time
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
