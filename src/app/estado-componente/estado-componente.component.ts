import { Component, OnInit, Input } from '@angular/core';
import { Estado } from './estado';

@Component({
  selector: 'app-estado-componente',
  templateUrl: './estado-componente.component.html'
})
export class EstadoComponenteComponent implements OnInit {
  @Input() estado : Estado

  constructor() { }

  ngOnInit() {
  }

}
