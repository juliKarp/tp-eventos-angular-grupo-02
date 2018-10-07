import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';

import { RoutingRoutes } from './app.routing'

@NgModule({
    declarations: [
        AppComponent,
        MisEventosComponent,
        MisEventosAgendaComponent,
        MisEventosOrganizadosComponent,
        MisEventosPendientesComponent
    ],
    imports: [
        BrowserModule,
        RoutingRoutes
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '' }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
