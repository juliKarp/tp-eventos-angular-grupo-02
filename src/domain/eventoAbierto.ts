import Evento from "./evento";
import Locacion from "./locacion";

export class EventoAbierto extends Evento{
    precio : number
    edadMinima : number

    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion,precio:number,edadMinima:number){
        super(nombre,fechaMaximaConfirmacion,fechaDesde,fechaHasta,locacion)
        this.precio = precio
        this.edadMinima = edadMinima
    }
}
