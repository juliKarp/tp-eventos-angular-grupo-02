import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';
import { NuevoEventoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/nuevo-evento.component';
import { AbiertoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/abierto/abierto.component';
import { CerradoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/cerrado/cerrado.component';

import { RoutingRoutes } from './app.routing';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MisEventosComponent,
        MisEventosAgendaComponent,
        MisEventosOrganizadosComponent,
        MisEventosPendientesComponent,
        PerfilComponent,
        NuevoEventoComponent,
        AbiertoComponent,
        CerradoComponent
    ],
    imports: [
        FormsModule,
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
