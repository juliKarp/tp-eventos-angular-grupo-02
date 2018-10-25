import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoCerrado extends Evento {
    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion){
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaDesde = moment(fechaDesde)
        this.fechaHasta = moment(fechaHasta)
        this.locacion = locacion
    }
}
