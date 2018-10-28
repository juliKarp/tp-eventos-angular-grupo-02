import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento from '../../../domain/evento';
import * as moment from 'moment';
import FechaUtils from 'src/utils/fechaUtils';

@Component({
    selector: 'app-mis-eventos-agenda',
    templateUrl: './mis-eventos-agenda.component.html'
})
export class MisEventosAgendaComponent implements OnInit {
    formatoFecha = FechaUtils.FORMATO_FECHA_HORA_DATE
    eventosHoy: Evento[]
    eventosSemana: Evento[]
    eventosProximos: Evento[]

    constructor(private eventoService: EventoService) { }
    
    async ngOnInit() {
        const eventos = await this.eventoService.agendaUsuario(this.eventoService.usuarioLogeadoId)      
        this.eventosHoy = eventos.filter(evento => evento.esHoy())
        this.eventosSemana = eventos.filter(evento => evento.esEnSemana())
        this.eventosProximos = eventos.filter(evento => evento.esFuturo())
    }

}
