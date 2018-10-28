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

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {       
        const usuarioId = this.eventoService.usuarioLogeadoId
        const usuarioPromise = this.eventoService.perfil(usuarioId)
        const amigosPromise = this.eventoService.amigos(usuarioId);
        [this.usuario, this.amigos] = await Promise.all([usuarioPromise, amigosPromise])
    }

    async eliminarAmigo(amigo: Usuario) {
        try {
            await this.eventoService.eliminarAmigo(this.eventoService.usuarioLogeadoId, amigo.id)
            this.amigos = this.amigos.filter((elemento) => elemento !== amigo)
        } catch (error) {
            console.log(error);
            
        }
    }

}
