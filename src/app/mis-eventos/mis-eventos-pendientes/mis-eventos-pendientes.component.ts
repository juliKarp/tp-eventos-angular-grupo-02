import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Invitacion from '../../../domain/invitacion';
import FechaUtils from 'src/utils/fechaUtils';

@Component({
    selector: 'app-mis-eventos-pendientes',
    templateUrl: './mis-eventos-pendientes.component.html'
})
export class MisEventosPendientesComponent implements OnInit {

    invitaciones: Invitacion[]
    formatoFecha = FechaUtils.FORMATO_FECHA_HORA_DATE

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        this.invitaciones = await this.eventoService.invitaciones(this.eventoService.usuarioLogeadoId)
    }

}
