import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';

@Component({
  selector: 'app-mis-eventos-agenda',
  templateUrl: './mis-eventos-agenda.component.html',
  styleUrls: ['./mis-eventos-agenda.component.css']
})
export class MisEventosAgendaComponent implements OnInit {

  eventos: Evento[]

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventos = this.eventoService.eventosAgenda
  }

}
