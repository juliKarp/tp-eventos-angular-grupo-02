import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Invitacion from '../../../domain/invitacion';

@Component({
  selector: 'app-mis-eventos-pendientes',
  templateUrl: './mis-eventos-pendientes.component.html',
  styleUrls: ['./mis-eventos-pendientes.component.css']
})
export class MisEventosPendientesComponent implements OnInit {

  invitaciones: Invitacion[]
  
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.invitaciones = this.eventoService.invitacionesPendientes
  }

}
