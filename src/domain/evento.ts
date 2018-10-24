import Usuario from "./usuario";
import Locacion from "./locacion";

export default class Evento {
    nombre : string
	fechaMaximaConfirmacion : Date
	fechaDesde : Date
	fechaHasta : Date
	locacion : Locacion
	cancelado : boolean = false
    postergado : boolean = false
    organizador : Usuario

    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion) {
        this.nombre = nombre
        this.fechaMaximaConfirmacion = fechaMaximaConfirmacion
        this.fechaDesde = fechaDesde
        this.fechaHasta = fechaHasta
        this.locacion = locacion
    }

    static jsonToEvento(json: any): Evento {
        const evento = new Evento(json.nombre, json.fechaConfirmacion, json.fechaDesde, json.fechaHasta, json.locacion)
        if (json.organizador) {
            evento.organizador = new Usuario(json.organizador)
        }
        return evento
    }
}
