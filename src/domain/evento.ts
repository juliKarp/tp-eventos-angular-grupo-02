import Usuario from "./usuario";
import Locacion from "./locacion";
import * as moment from 'moment';
import { Moment } from 'moment';

export default class Evento {

    static readonly FORMATO_FECHA_HORA: string = "DD/MM/YYYY HH:mm"
    id: number
    nombre : string
	fechaMaximaConfirmacion : Moment
	fechaDesde : Moment
	fechaHasta : Moment
	locacion : Locacion
    organizador : Usuario
    invitados : number
    confirmados: number
    rechazados: number

    constructor() { }

    static fromJson(json: any): Evento {
        if (!json) { return }
        const evento = new Evento()
        evento.nombre = json.nombre
        evento.fechaMaximaConfirmacion = moment(json.fechaMaximaConfirmacion, this.FORMATO_FECHA_HORA)
        evento.fechaDesde = moment(json.fechaDesde, this.FORMATO_FECHA_HORA)
        evento.fechaHasta = moment(json.fechaHasta, this.FORMATO_FECHA_HORA)
        evento.locacion = json.locacion
        evento.organizador = Usuario.fromJson(json.organizador)
        return evento
    }
}
