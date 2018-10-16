import Evento from "./evento";

export default class Invitacion {
    evento: Evento
    acompaniantes: number

    constructor(evento:Evento, acompaniantes:number) {
        this.evento = evento
        this.acompaniantes = acompaniantes
    }
}
