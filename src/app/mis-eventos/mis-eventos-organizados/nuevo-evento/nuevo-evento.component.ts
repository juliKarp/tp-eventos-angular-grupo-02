import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';
import Locacion from 'src/domain/locacion';
import Usuario from 'src/domain/usuario';
import * as moment from 'moment';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html'
})
export class NuevoEventoComponent implements OnInit {
  today() :string {
    return moment().format("YYYY-MM-DD")
  }

  minHasta() :string {
    return moment(this.fechaDesde).format("YYYY-MM-DD")
  }

  nombre: string
  fechaMaximaConfirmacion: Date
  fechaDesde: Date
  fechaHasta: Date
  horaMaximaConfirmacion: string
  horaDesde: string
  horaHasta: string
  locacion: Locacion
  organizador: Usuario

  locacionesDisponibles: Locacion[] = []

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.locacionesDisponibles = this.eventoService.locaciones
    this.horaMaximaConfirmacion = "12:00"
    this.horaDesde = "12:00"
    this.horaHasta = "12:00"
  }

  nuevoEvento() {
    const evento = this.eventoService.crearEventoAbierto(this.nombre, this.fechaMaximaConfirmacion, this.fechaDesde, this.fechaHasta,this.horaMaximaConfirmacion, this.horaDesde, this.horaHasta, this.locacion)
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
    this.horaMaximaConfirmacion = "12:00"
    this.horaDesde = "12:00"
    this.horaHasta = "12:00"
  }

}
