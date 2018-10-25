import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';
import FechaUtils from 'src/utils/fechaUtils';

@Component({
  selector: 'app-mis-eventos-organizados',
  templateUrl: './mis-eventos-organizados.component.html'
})
export class MisEventosOrganizadosComponent implements OnInit {
  formatoFecha = FechaUtils.FORMATO_FECHA_HORA_DATE
  eventos: Evento[]
  
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventos = this.eventoService.eventosOrganizados
  }

}
