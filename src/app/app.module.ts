import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';
import { NuevoEventoAbiertoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento-cerrado/nuevo-evento-cerrado.component';

import { RoutingRoutes } from './app.routing';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
    declarations: [
        AppComponent,
        MisEventosComponent,
        MisEventosAgendaComponent,
        MisEventosOrganizadosComponent,
        MisEventosPendientesComponent,
        PerfilComponent,
        NuevoEventoAbiertoComponent,
        NuevoEventoCerradoComponent,
    ],
    imports: [
        BrowserModule,
        RoutingRoutes
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
