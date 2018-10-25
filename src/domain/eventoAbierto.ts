import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoAbierto extends Evento{

    constructor(nombre:string,fechaMaximaConfirmacion:string,fechaDesde:string,fechaHasta:string,locacion:Locacion){
<<<<<<< HEAD
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaDesde = moment(fechaDesde)
        this.fechaHasta = moment(fechaHasta)
        this.locacion = locacion
=======
        super(nombre,fechaMaximaConfirmacion,fechaDesde,fechaHasta,locacion)
>>>>>>> e09ce045010d5fd9007ad88d957056c7a2e3c50d
    }
}
