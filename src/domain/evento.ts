import Usuario from "./usuario";
import Locacion from "./locacion";
import * as moment from 'moment';
import { Moment } from 'moment';
import FechaUtils from "src/utils/fechaUtils";

export default class Evento {

    id: number
    nombre : string
	fechaDesde : Moment
	fechaHasta : Moment
	locacion : Locacion
    organizador : Usuario
    invitados : number
    confirmados: number
    rechazados: number
    vendidas: number
    capacidadMaxima: number
    precio: number
    edadMinima: number

    constructor() { }

    static fromJson(json: any): Evento {
        if (!json) { return }
        const evento = new Evento()
        evento.nombre = json.nombre
        evento.fechaDesde = moment(json.fechaDesde, FechaUtils.FORMATO_FECHA_HORA_MOMENT)
        evento.fechaHasta = moment(json.fechaHasta, FechaUtils.FORMATO_FECHA_HORA_MOMENT)
        //evento.locacion = Locacion.fromJson(json.locacion)
        evento.locacion = json.locacion
        evento.organizador = Usuario.fromJson(json.organizador)
        //Evento Cerrado
        evento.invitados = json.cantidadInvitaciones
        evento.confirmados = json.cantidadInvitacionesConfirmadas
        evento.rechazados = json.cantidadInvitacionesRechazadas
        //Evento Abierto
        evento.vendidas = json.cantidadEntradasVendidas
        evento.capacidadMaxima = json.capacidadMaxima
        evento.precio = json.precio
        evento.edadMinima = json.edadMinima
        return evento
    }
}
