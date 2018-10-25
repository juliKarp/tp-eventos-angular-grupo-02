import Usuario from "./usuario";
import Locacion from "./locacion";

export default class Evento {
    nombre : string
	fechaMaximaConfirmacion : string
	fechaDesde : string
	fechaHasta : string
	locacion : Locacion
    organizador : Usuario
    invitados : number
    confirmados: number
    rechazados: number

    constructor(nombre:string,fechaMaximaConfirmacion:string,fechaDesde:string,fechaHasta:string,locacion:Locacion) {
        this.nombre = nombre
        this.fechaMaximaConfirmacion = fechaMaximaConfirmacion
        this.fechaDesde = fechaDesde
        this.fechaHasta = fechaHasta
        this.locacion = locacion
    }

    static jsonToEvento(json: any): Evento {
        const evento = new Evento(json.nombre, json.fechaConfirmacion, json.fechaDesde, json.fechaHasta, json.locacion)
        if (json.organizador) {
            evento.organizador = json.organizador // aparentemente convierte solo el json a usuario...
        }
        evento.invitados = json.invitados
        evento.confirmados = json.confirmados
        evento.rechazados = json.rechazados
        return evento
    }
}
