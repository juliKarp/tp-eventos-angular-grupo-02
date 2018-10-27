import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/services/evento.service';
import { ActivatedRoute } from '@angular/router';
import Evento from 'src/domain/evento';
import * as moment from 'moment';

@Component({
  selector: 'app-abierto',
  templateUrl: './abierto.component.html'
})
export class AbiertoComponent implements OnInit {

  today(): string {
    return moment().format("YYYY-MM-DD")
  }
  max(): string {
    return moment(this.evento.fechaDesde).format("YYYY-MM-DD")
  }

  evento: Evento
  fechaMaximaConfirmacion: Date
  horaMaximaConfirmacion: string

  constructor(private eventoService: EventoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.evento = this.eventoService.crearEvento(this.route.snapshot.url[0].path)
    this.horaMaximaConfirmacion = "12:00"
  }

  // FechaUtils.fechaHoraToMoment(fechaMaximaConfirmacion, horaMaximaConfirmacion)

}
