import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Estado } from 'src/app/estado-componente/estado';
import Evento from 'src/domain/evento';
import Locacion from 'src/domain/locacion';
import FechaUtils from 'src/utils/fechaUtils';
import { EventoService } from '../../../../services/evento.service';
import { AbiertoComponent } from './abierto/abierto.component';
import { CerradoComponent } from './cerrado/cerrado.component';

@Component({
    selector: 'app-nuevo-evento',
    templateUrl: './nuevo-evento.component.html'
})
export class NuevoEventoComponent implements OnInit {

    evento: Evento
    fechaDesde: Date
    fechaHasta: Date
    fechaConfirmacion: Date
    horaDesde: string
    horaHasta: string
    horaConfirmacion: string
    locacionesDisponibles: Locacion[] = []

    estado: Estado = new Estado()
    disableSubmit: boolean

    constructor(private eventoService: EventoService, private router: Router) { }

    async ngOnInit() {
        try {
            this.locacionesDisponibles = await this.eventoService.locaciones()
            this.inicializarCampos()
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

    componenteActivado(componente: CerradoComponent | AbiertoComponent) {
        this.estado.cargando()
        this.estado.limpiarErrores()
        this.evento = componente.nuevoEvento()
    }

    async nuevoEvento() {
        this.estado.cargando()
        this.estado.limpiarErrores()
        try {
            this.evento.fechaDesde = FechaUtils.fechaHoraToMoment(this.fechaDesde, this.horaDesde)
            this.evento.fechaHasta = FechaUtils.fechaHoraToMoment(this.fechaHasta, this.horaHasta)
            this.evento.fechaConfirmacion = FechaUtils.fechaHoraToMoment(this.fechaConfirmacion, this.horaConfirmacion)
            await this.eventoService.agregarEvento(this.eventoService.usuarioLogeadoId, this.evento)
            this.disableSubmit = true
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

    inicializarCampos() {
        this.fechaDesde = undefined
        this.fechaHasta = undefined
        this.fechaConfirmacion = undefined
        this.horaDesde = "12:00"
        this.horaHasta = "12:00"
        this.horaConfirmacion = "12:00"
    }

    fechaMinima(): string {
        return moment().format("YYYY-MM-DD")
    }

    fechaInicio(): string {
        return moment(this.fechaDesde).format("YYYY-MM-DD")
    }

    cerrarMenu() {
        var elemento: HTMLElement = document.getElementById('dismissModal') as HTMLElement
        elemento.click()
        this.router.navigate(['/eventos/#/'])
    }
}
