import Evento from "./evento";

export default class Invitacion {
    evento: Evento
    acompaniantes: number

    constructor(evento:Evento, acompaniantes:number) {
        this.evento = evento
        this.acompaniantes = acompaniantes
    }

    static fromJson(json:any) : Invitacion {
        if (!json) {return}
        const invitacion = new Invitacion(Evento.fromJson(json.evento), json.acompaniantes)
        return invitacion
    }
}
