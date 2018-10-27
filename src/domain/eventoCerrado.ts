import Evento from "./evento";
import Locacion from "./locacion";
import FechaUtils from "src/utils/fechaUtils";

export class EventoCerrado extends Evento {

    precio: number
    edadMinima: number 

    constructor(){
        super()
    }
}
