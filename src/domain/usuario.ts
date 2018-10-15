export default class Usuario {
    nombreUsuario: string
    nombreApellido: string
    email: string
    tipoDeUsuario: string
    amigos: Usuario[] = []

    constructor(json:any) {
        this.nombreUsuario = json.nombreUsuario
        this.nombreApellido = json.nombreApellido
        this.email = json.email
        this.tipoDeUsuario = json.tipoDeUsuario
        if (json.amigos) {
            this.amigos = json.amigos.map(amigo => 
                new Usuario(amigo)
            );
        }
    }

    get cantidadAmigos(): number {
        return this.amigos.length
    }
}
