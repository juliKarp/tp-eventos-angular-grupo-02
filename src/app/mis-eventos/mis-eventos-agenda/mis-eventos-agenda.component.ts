import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';
import * as moment from 'moment';

@Component({
  selector: 'app-mis-eventos-agenda',
  templateUrl: './mis-eventos-agenda.component.html',
})
export class MisEventosAgendaComponent implements OnInit {

  eventos: Evento[]
  eventosHoy: Evento[]
  eventosSemana: Evento[]
  eventosProximos: Evento[]

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventos = this.eventoService.eventosAgenda
    this.eventosHoy = this.eventos.filter(evento => evento.fechaDesde.isSame(moment(), 'day'))
    this.eventosSemana = this.eventos.filter(evento => evento.fechaDesde.isBetween(moment(), moment().add(7, 'days'),'day', '(]'))
    this.eventosProximos = this.eventos.filter(evento => evento.fechaDesde.isAfter(moment().add(7, 'days'),'day'))
  }

}
