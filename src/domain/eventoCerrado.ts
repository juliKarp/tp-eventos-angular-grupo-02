import Evento from "./evento";
import Locacion from "./locacion";

export class EventoCerrado extends Evento{
    capacidadMaxima : number

    constructor(nombre:string,fechaMaximaConfirmacion:Date,fechaDesde:Date,fechaHasta:Date,locacion:Locacion,capacidadMaxima:number){
        super(nombre,fechaMaximaConfirmacion,fechaDesde,fechaHasta,locacion)
        this.capacidadMaxima = capacidadMaxima
    }
}
