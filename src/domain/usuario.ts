export default class Usuario {
    nombreUsuario: string
    nombreApellido: string
    email: string
    tipoDeUsuario: string
    amigos: Usuario[] = []

    constructor() {}

    static fromJson(json: any): Usuario {
        if (!json) {return}
        const usuario = new Usuario()
        usuario.nombreUsuario = json.nombreUsuario
        usuario.nombreApellido = json.nombreApellido
        usuario.email = json.email
        usuario.tipoDeUsuario = json.tipoDeUsuario
        if (json.amigos) {
            usuario.amigos = json.amigos.map(amigo => 
                Usuario.fromJson(amigo)
            );
        }
        return usuario
    }

    get cantidadAmigos(): number {
        return this.amigos.length
    }
}
