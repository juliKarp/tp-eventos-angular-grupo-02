import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import Evento, { EventoAbierto, EventoCerrado } from '../../../domain/evento';
import FechaUtils from 'src/utils/fechaUtils';
import { Estado } from 'src/app/estado-componente/estado';

@Component({
    selector: 'app-mis-eventos-organizados',
    templateUrl: './mis-eventos-organizados.component.html'
})
export class MisEventosOrganizadosComponent implements OnInit {
    formatoFecha = FechaUtils.FORMATO_FECHA_HORA_DATE
    eventosAbiertos: Evento[]
    eventosCerrados: Evento[]
    estado: Estado = new Estado()

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        try {
            const eventos = await this.eventoService.organizados(this.eventoService.usuarioLogeadoId)
            this.eventosAbiertos = eventos.filter(evento => evento.esAbierto())
            this.eventosCerrados = eventos.filter(evento => evento.esCerrado())
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

}
