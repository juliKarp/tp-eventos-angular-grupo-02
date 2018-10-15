import Usuario from "./usuario";

export default class Evento {
    nombre: string
    fechaDesde: string
    locacion: string
    invitados: number
    confirmados: number
    rechazados: number
    organizador: Usuario

    constructor(json:any) {
        this.nombre = json.nombre
        this.fechaDesde = json.fechaDesde
        this.locacion = json.locacion
        this.invitados = json.invitados
        this.confirmados = json.confirmados
        this.rechazados = json.rechazados
        if (json.organizador) {
            this.organizador = new Usuario(json.organizador)
        }
    }
}
