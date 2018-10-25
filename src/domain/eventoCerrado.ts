import Evento from "./evento";
import Locacion from "./locacion";

export class EventoCerrado extends Evento {

    constructor(nombre: string, fechaMaximaConfirmacion: string, fechaDesde: string, fechaHasta: string, locacion: Locacion) {
        super(nombre, fechaMaximaConfirmacion, fechaDesde, fechaHasta, locacion)
    }
}
