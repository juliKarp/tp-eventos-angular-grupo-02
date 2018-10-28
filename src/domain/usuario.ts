export default class Usuario {
    id: number
    nombreUsuario: string
    nombreApellido: string
    email: string
    tipoDeUsuario: string
    cantidadAmigos: number

    constructor() {}

    static fromJson(json: any): Usuario {
        if (!json) {return}
        const usuario = new Usuario()
        usuario.id = json.id
        usuario.nombreUsuario = json.nombreUsuario
        usuario.nombreApellido = json.nombreApellido
        usuario.email = json.email
        usuario.tipoDeUsuario = json.tipoDeUsuario
        usuario.cantidadAmigos = json.cantidadAmigos
        return usuario
    }
}
