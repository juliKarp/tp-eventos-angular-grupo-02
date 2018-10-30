import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Invitacion from '../../../domain/invitacion';
import FechaUtils from 'src/utils/fechaUtils';
import { Estado } from 'src/app/estado-componente/estado';

@Component({
    selector: 'app-mis-eventos-pendientes',
    templateUrl: './mis-eventos-pendientes.component.html'
})
export class MisEventosPendientesComponent implements OnInit {

    invitaciones: Invitacion[]
    formatoFecha = FechaUtils.FORMATO_FECHA_HORA_DATE
    estado: Estado = new Estado()

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        try {
            this.invitaciones = await this.eventoService.invitaciones(this.eventoService.usuarioLogeadoId)
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

    async aceptar(invitacion: Invitacion) {
        this.estado.cargando()
        this.estado.limpiarErrores()
        try {
            await this.eventoService.aceptarInvitacion(this.eventoService.usuarioLogeadoId, invitacion.evento.id, invitacion.acompaniantes)
            invitacion.aceptar()
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

    async rechazar(invitacion: Invitacion) {
        this.estado.cargando()
        this.estado.limpiarErrores()
        try {
            await this.eventoService.rechazarInvitacion(this.eventoService.usuarioLogeadoId, invitacion.evento.id)
            invitacion.rechazar()
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }
}
