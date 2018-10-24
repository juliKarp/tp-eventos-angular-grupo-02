export default class Locacion {
    nombre : string
    ubicacionX : number 
    ubicacionY : number 

    constructor(nombre:string,x:number,y:number) {
        this.nombre = nombre
        this.ubicacionX = x
        this.ubicacionY = y
    }

    static jsonToLocacion(jsonLocacion:any): Locacion {
        return new Locacion(jsonLocacion.nombre,jsonLocacion.x,jsonLocacion.y)
    }
}
