import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/services/evento.service';
import { ActivatedRoute } from '@angular/router';
import Evento from 'src/domain/evento';

@Component({
  selector: 'app-cerrado',
  templateUrl: './cerrado.component.html'
})
export class CerradoComponent implements OnInit {

  evento: Evento

  constructor(private eventoService: EventoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.evento = this.eventoService.crearEvento(this.route.snapshot.url[0].path)
  }

}
