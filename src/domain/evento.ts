import Usuario from "./usuario";
import Locacion from "./locacion";
import * as moment from 'moment';
import { Moment } from 'moment';
import FechaUtils from "src/utils/fechaUtils";


export default class Evento {

    tipo: string
    id: number
    nombre: string
    capacidadMaxima: number
    fechaConfirmacion: Moment
    fechaDesde: Moment
    fechaHasta: Moment
    locacion: Locacion
    organizador: Usuario

    constructor() { }

    static fromJson(json: any): Evento {
        if (!json) { return }
        var evento: Evento
        if ("Abierto" == json.tipo) {
            evento = EventoAbierto.fromJson(json)
        } else if ("Cerrado" == json.tipo) {
            evento = EventoCerrado.fromJson(json)
        } else {
            evento = new Evento()
        }
        evento.tipo = json.tipo
        evento.id = json.id
        evento.nombre = json.nombre
        evento.capacidadMaxima = json.capacidadMaxima
        evento.fechaConfirmacion = moment(json.fechaMaximaConfirmacion, FechaUtils.FORMATO_FECHA_HORA_MOMENT)
        evento.fechaDesde = moment(json.fechaDesde, FechaUtils.FORMATO_FECHA_HORA_MOMENT)
        evento.fechaHasta = moment(json.fechaHasta, FechaUtils.FORMATO_FECHA_HORA_MOMENT)
        evento.organizador = Usuario.fromJson(json.organizador)
        evento.locacion = Locacion.fromJson(json.locacion)
        return evento
    }

    esHoy(): boolean {
        return this.fechaDesde.isSame(moment(), 'day')
    }
    esEnSemana(): boolean {
        return this.fechaDesde.isBetween(moment(), moment().add(7, 'days'), 'day', '(]')
    }
    esFuturo(): boolean {
        return this.fechaDesde.isAfter(moment().add(7, 'days'), 'day')
    }
    esAbierto(): boolean {return false}
    esCerrado(): boolean {return false}
}

export class EventoAbierto extends Evento {

    vendidas: number
    precio: number
    edadMinima: number

    constructor() {
        super()
        this.tipo = "Abierto"
    }

    static fromJson(json: any): EventoAbierto {
        if (!json) { return }
        const evento = new EventoAbierto()
        evento.vendidas = json.cantidadEntradasVendidas
        evento.precio = json.precio
        evento.edadMinima = json.edadMinima
        return evento
    }

    esAbierto(): boolean {return true}
}

export class EventoCerrado extends Evento {

    invitados: number
    confirmados: number
    rechazados: number

    constructor() {
        super()
        this.tipo = "Cerrado"
    }

    static fromJson(json: any): EventoCerrado {
        if (!json) { return }
        const evento = new EventoCerrado()
        evento.invitados = json.cantidadInvitaciones
        evento.confirmados = json.cantidadInvitacionesConfirmadas
        evento.rechazados = json.cantidadInvitacionesRechazadas
        return evento
    }
    esCerrado(): boolean {return true}
}
