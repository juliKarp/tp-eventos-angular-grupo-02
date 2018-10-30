import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Evento from 'src/domain/evento';
import Locacion from 'src/domain/locacion';
import FechaUtils from 'src/utils/fechaUtils';
import { EventoService } from '../../../../services/evento.service';
import { CerradoComponent } from './cerrado/cerrado.component';
import { AbiertoComponent } from './abierto/abierto.component';
import { Router } from '@angular/router';

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

    error: string
    loading: boolean
    disableSubmit: boolean

    constructor(private eventoService: EventoService, private router: Router) { }

    async ngOnInit() {
        this.locacionesDisponibles = await this.eventoService.locaciones()
        this.inicializarCampos()
    }

    componenteActivado(componente: CerradoComponent | AbiertoComponent) {
        this.evento = componente.nuevoEvento()
    }

    async nuevoEvento() {
        this.loading = true
        this.error = undefined
        try {
            this.evento.fechaDesde = FechaUtils.fechaHoraToMoment(this.fechaDesde, this.horaDesde)
            this.evento.fechaHasta = FechaUtils.fechaHoraToMoment(this.fechaHasta, this.horaHasta)
            this.evento.fechaConfirmacion = FechaUtils.fechaHoraToMoment(this.fechaConfirmacion, this.horaConfirmacion)
            await this.eventoService.agregarEvento(this.eventoService.usuarioLogeadoId, this.evento)
            this.disableSubmit = true
        } catch (error) {
            console.log(error);
            this.error = error._body
        }
        this.loading = false
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
