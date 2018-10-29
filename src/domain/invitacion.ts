import Evento from "./evento";

export default class Invitacion {
    evento: Evento
    acompaniantes: number
    aceptada: boolean
    rechazada: boolean

    constructor(evento:Evento, acompaniantes:number) {
        this.evento = evento
        this.acompaniantes = acompaniantes
    }

    static fromJson(json:any) : Invitacion {
        if (!json) {return}
        const invitacion = new Invitacion(Evento.fromJson(json.evento), json.acompaniantes)
        invitacion.aceptada = Boolean(json.aceptada)
        invitacion.rechazada = Boolean(json.rechazada)
        return invitacion
    }

    pendiente(): boolean {
        return !this.aceptada && !this.rechazada
    }

    aceptar() {
        this.aceptada = true
    }
    
    rechazar() {
        this.rechazada = true
        this.acompaniantes = 0
    }

}
