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
<<<<<<< HEAD
    this.eventosHoy = this.eventos.filter(evento => evento.fechaDesde.isSame(moment(), 'day'))
    this.eventosSemana = this.eventos.filter(evento => evento.fechaDesde.isBetween(moment(), moment().add(7, 'days'),'day', '(]'))
    this.eventosProximos = this.eventos.filter(evento => evento.fechaDesde.isAfter(moment().add(7, 'days'),'day'))
=======
    this.eventosHoy = this.eventos.filter(evento => evento.fechaDesde == "24/10/2018")
    this.eventosSemana = this.eventos.filter(evento => evento.fechaDesde < "28/10/2018")
>>>>>>> e09ce045010d5fd9007ad88d957056c7a2e3c50d
  }

}
