import { Component, OnInit } from '@angular/core';
import Usuario from '../../domain/usuario';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  usuario: Usuario

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.usuario = this.eventoService.usuario
  }

  eliminarAmigo(amigo: Usuario) {
    this.eventoService.eliminarAmigo(amigo)
  }

}
