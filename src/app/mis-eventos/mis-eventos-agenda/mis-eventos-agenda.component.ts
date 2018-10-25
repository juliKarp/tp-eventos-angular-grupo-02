import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';

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
    this.eventosHoy = this.eventos.filter(evento => evento.fechaDesde == "24/10/2018")
    this.eventosSemana = this.eventos.filter(evento => evento.fechaDesde < "28/10/2018")
  }

}
