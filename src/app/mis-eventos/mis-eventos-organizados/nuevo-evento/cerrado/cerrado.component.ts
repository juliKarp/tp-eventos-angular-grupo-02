import { Component, OnInit } from '@angular/core';
import Evento, { EventoCerrado } from 'src/domain/evento';

@Component({
    selector: 'app-cerrado',
    templateUrl: './cerrado.component.html'
})
export class CerradoComponent implements OnInit {

    evento: EventoCerrado

    constructor() { }

    ngOnInit() {

    }

    nuevoEvento(): EventoCerrado {
        this.evento = new EventoCerrado()
        return this.evento
    }
}
