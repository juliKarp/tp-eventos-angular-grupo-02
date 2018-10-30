import { Component, OnInit } from '@angular/core';
import Usuario from '../../domain/usuario';
import { EventoService } from '../../services/evento.service';
import { Estado } from '../estado-componente/estado';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

    usuario: Usuario = new Usuario()
    amigos: Usuario[]
    estado: Estado = new Estado()

    constructor(private eventoService: EventoService) { }

    async ngOnInit() {
        try {
            const usuarioId = this.eventoService.usuarioLogeadoId
            const usuarioPromise = this.eventoService.perfil(usuarioId)
            const amigosPromise = this.eventoService.amigos(usuarioId);
            [this.usuario, this.amigos] = await Promise.all([usuarioPromise, amigosPromise])
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

    async eliminarAmigo(amigo: Usuario) {
        this.estado.cargando()
        this.estado.limpiarErrores()
        try {
            await this.eventoService.eliminarAmigo(this.eventoService.usuarioLogeadoId, amigo.id)
            this.amigos = this.amigos.filter((elemento) => elemento !== amigo)
            this.usuario.cantidadAmigos = this.amigos.length
        } catch (error) {
            this.estado.respuestaError(error)
        }
        this.estado.listo()
    }

}
