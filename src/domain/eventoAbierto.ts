import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoAbierto extends Evento{

    constructor(nombre:string,fechaMaximaConfirmacion:string,fechaDesde:string,fechaHasta:string,locacion:Locacion){
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaDesde = moment(fechaDesde)
        this.fechaHasta = moment(fechaHasta)
        this.locacion = locacion
    }
}
