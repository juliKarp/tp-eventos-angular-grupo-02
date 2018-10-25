import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoCerrado extends Evento {
<<<<<<< HEAD
    constructor(nombre: string, fechaMaximaConfirmacion: string, fechaDesde: string, fechaHasta: string, locacion: Locacion) {
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaDesde = moment(fechaDesde)
        this.fechaHasta = moment(fechaHasta)
        this.locacion = locacion
=======

    constructor(nombre: string, fechaMaximaConfirmacion: string, fechaDesde: string, fechaHasta: string, locacion: Locacion) {
        super(nombre, fechaMaximaConfirmacion, fechaDesde, fechaHasta, locacion)
>>>>>>> e09ce045010d5fd9007ad88d957056c7a2e3c50d
    }
}
