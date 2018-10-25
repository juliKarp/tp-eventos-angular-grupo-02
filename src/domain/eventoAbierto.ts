import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';
import { Time } from "@angular/common";

export class EventoAbierto extends Evento{

    constructor(nombre: string, fechaMaximaConfirmacion: Date, fechaDesde: Date, fechaHasta: Date, horaMaximaConfirmacion: Time, horaDesde: Time, horaHasta: Time, locacion: Locacion){
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaMaximaConfirmacion.hour(horaMaximaConfirmacion.hours)
        this.fechaMaximaConfirmacion.hour(horaMaximaConfirmacion.minutes)
        this.fechaDesde = moment(fechaDesde)
        this.fechaDesde.hour(horaDesde.hours)
        this.fechaDesde.hour(horaDesde.minutes)
        this.fechaHasta = moment(fechaHasta)
        this.fechaHasta.hour(horaHasta.hours)
        this.fechaHasta.hour(horaHasta.minutes)
        this.locacion = locacion
    }
}
