import Evento from "./evento";
import Locacion from "./locacion";
import FechaUtils from "src/utils/fechaUtils";


export class EventoAbierto extends Evento {

    constructor(nombre: string, fechaMaximaConfirmacion: Date, fechaDesde: Date, fechaHasta: Date, horaMaximaConfirmacion: string, horaDesde: string, horaHasta: string, locacion: Locacion) {
        super()
        this.nombre = nombre
        
        this.fechaMaximaConfirmacion = FechaUtils.fechaHoraToMoment(fechaMaximaConfirmacion, horaMaximaConfirmacion)
        this.fechaDesde = FechaUtils.fechaHoraToMoment(fechaDesde, horaDesde)
        this.fechaHasta = FechaUtils.fechaHoraToMoment(fechaHasta, horaHasta)

        console.log(this.fechaDesde);

        this.locacion = locacion
    }

}
