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
        const usuarioPromise = this.eventoService.perfilUsuario(usuarioId)
        const amigosPromise = this.eventoService.amigosUsuario(usuarioId);
        [this.usuario, this.amigos] = await Promise.all([usuarioPromise, amigosPromise])
    }

    eliminarAmigo(amigo: Usuario) {
        this.eventoService.eliminarAmigo(amigo)
    }

}
