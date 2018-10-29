export default class Locacion {
    id : string
    nombre : string

    constructor() {}

    static fromJson(json:any): Locacion {
        if (!json) {return}
        const locacion = new Locacion()
        locacion.id = json.id
        locacion.nombre = json.nombre
        return locacion
    }
}
