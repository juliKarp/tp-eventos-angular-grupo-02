import Usuario from "./usuario";

export default class Evento {
    cerrado: boolean
    nombre: string
    fechaDesde: string
    locacion: string
    invitados: number
    confirmados: number
    rechazados: number
    organizador: Usuario

    constructor(nombre:string,fechaDesde:string,locacion:string) {
        this.nombre = nombre
        this.fechaDesde = fechaDesde
        this.locacion = locacion
    }

    static jsonToEvento(json: any): Evento {
        const evento = new Evento(json.nombre, json.fechaDesde, json.locacion)
        evento.invitados = json.invitados
        evento.confirmados = json.confirmados
        evento.rechazados = json.rechazados
        if (json.organizador) {
            evento.organizador = new Usuario(json.organizador)
        }
        return evento
    }
}
