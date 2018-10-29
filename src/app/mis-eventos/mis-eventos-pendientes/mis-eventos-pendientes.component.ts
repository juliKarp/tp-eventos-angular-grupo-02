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
    error: string
    loading: boolean = true

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        try {
            this.invitaciones = await this.eventoService.invitaciones(this.eventoService.usuarioLogeadoId)
        } catch (error) {
            console.log(error);
            this.error = error._body
        }
        this.loading = false
    }

    async aceptar(invitacion: Invitacion) {
        this.loading = true
        this.error = undefined
        try {
            await this.eventoService.aceptarInvitacion(this.eventoService.usuarioLogeadoId, invitacion.evento.id, invitacion.acompaniantes)
            invitacion.aceptar()
        } catch (error) {
            console.log(error);
            this.error = error._body
        }
        this.loading = false
    }

    async rechazar(invitacion: Invitacion) {
        this.loading = true
        this.error = undefined
        try {
            await this.eventoService.rechazarInvitacion(this.eventoService.usuarioLogeadoId, invitacion.evento.id)
            invitacion.rechazar()
        } catch (error) {
            console.log(error);
            this.error = error._body
        }
        this.loading = false
    }
}
