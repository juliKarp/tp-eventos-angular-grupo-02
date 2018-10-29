import { Component, OnInit } from '@angular/core';
import { EventoAbierto } from 'src/domain/evento';

@Component({
    selector: 'app-abierto',
    templateUrl: './abierto.component.html'
})
export class AbiertoComponent implements OnInit {

    evento: EventoAbierto

    constructor() { }

    ngOnInit() {
    }

    nuevoEvento(): EventoAbierto {
        this.evento = new EventoAbierto()
        return this.evento
    }
}
