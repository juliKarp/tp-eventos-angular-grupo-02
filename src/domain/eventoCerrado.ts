import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoCerrado extends Evento {
    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion){
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment({
            'year': fechaMaximaConfirmacion.getFullYear(), 
            'month': fechaMaximaConfirmacion.getMonth(),
            'day': fechaMaximaConfirmacion.getDay()
        });
        this.fechaDesde = moment({
            'year': fechaDesde.getFullYear(), 
            'month': fechaDesde.getMonth(),
            'day': fechaDesde.getDay()
        });
        this.fechaHasta = moment({
            'year': fechaHasta.getFullYear(), 
            'month': fechaHasta.getMonth(),
            'day': fechaHasta.getDay()
        });
        this.locacion = locacion
    }
}
