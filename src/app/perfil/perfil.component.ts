import { Component, OnInit } from '@angular/core';
import Usuario from '../../domain/usuario';
import { EventoService } from '../../services/evento.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

    usuario: Usuario = new Usuario()
    amigos: Usuario[]
    error: string
    loading: boolean = true

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        try {
            const usuarioId = this.eventoService.usuarioLogeadoId
            const usuarioPromise = this.eventoService.perfil(usuarioId)
            const amigosPromise = this.eventoService.amigos(usuarioId);
            [this.usuario, this.amigos] = await Promise.all([usuarioPromise, amigosPromise])
        } catch (error) {
            console.log(error);
            this.error = error
        }
        this.loading = false
    }

    async eliminarAmigo(amigo: Usuario) {
        this.loading = true
        this.error = undefined
        try {
            await this.eventoService.eliminarAmigo(this.eventoService.usuarioLogeadoId, amigo.id)
            this.amigos = this.amigos.filter((elemento) => elemento !== amigo)
            this.usuario.cantidadAmigos = this.amigos.length
        } catch (error) {
            console.log(error);
            this.error = error._body
        }
        this.loading = false
    }

}
