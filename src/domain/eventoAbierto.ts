import Evento from "./evento";
import Locacion from "./locacion";
import * as moment from 'moment';

export class EventoAbierto extends Evento{
    precio : number
    edadMinima : number

    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion,precio:number,edadMinima:number){
        super()
        this.nombre = nombre
        this.fechaMaximaConfirmacion = moment(fechaMaximaConfirmacion)
        this.fechaDesde = moment(fechaDesde)
        this.fechaHasta = moment(fechaHasta)
        this.locacion = locacion
        this.precio = precio
        this.edadMinima = edadMinima
    }
}
