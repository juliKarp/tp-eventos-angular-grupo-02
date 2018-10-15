import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';

@Component({
  selector: 'app-mis-eventos-organizados',
  templateUrl: './mis-eventos-organizados.component.html',
  styleUrls: ['./mis-eventos-organizados.component.css']
})
export class MisEventosOrganizadosComponent implements OnInit {

  eventos: Evento[]
  
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventos = this.eventoService.eventosOrganizados
  }

}
