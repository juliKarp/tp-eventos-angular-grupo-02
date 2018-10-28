import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../../services/evento.service';
import Locacion from 'src/domain/locacion';
import * as moment from 'moment';
import Evento from 'src/domain/evento';
import FechaUtils from 'src/utils/fechaUtils';
import { ActivatedRoute } from '@angular/router'

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

  evento: Evento
  fechaDesde: Date
  fechaHasta: Date
  horaDesde: string
  horaHasta: string
  locacionesDisponibles: Locacion[] = []

  constructor(private eventoService: EventoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.locacionesDisponibles = this.eventoService.locaciones
    this.inicializarCampos()
  }

  async nuevoEvento() {
    this.evento.organizador = await this.eventoService.perfil(this.eventoService.usuarioLogeadoId)
    this.evento.fechaDesde = FechaUtils.fechaHoraToMoment(this.fechaDesde, this.horaDesde)
    this.evento.fechaHasta = FechaUtils.fechaHoraToMoment(this.fechaHasta, this.horaHasta)
    this.eventoService.agregarEvento(this.evento)
    this.inicializarCampos()
  }

  inicializarCampos() {
    this.evento = this.eventoService.crearEvento(this.route.firstChild.snapshot.url[0].path)
    this.fechaDesde = null
    this.fechaHasta = null
    this.horaDesde = "12:00"
    this.horaHasta = "12:00"
  }

}
