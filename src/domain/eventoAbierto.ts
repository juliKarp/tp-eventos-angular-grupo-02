import Evento from "./evento";
import Locacion from "./locacion";
import FechaUtils from "src/utils/fechaUtils";
import { Moment } from "moment";

export class EventoAbierto extends Evento {

    fechaMaximaConfirmacion: Moment

    constructor() {
        super()
    }

}
