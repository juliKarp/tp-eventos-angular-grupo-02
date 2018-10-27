import { RouterModule, Routes } from '@angular/router';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NuevoEventoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/nuevo-evento.component';
import { AbiertoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/abierto/abierto.component';
import { CerradoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento/cerrado/cerrado.component';

const routes: Routes = [
  { path: 'eventos',    component: MisEventosComponent,    children: [
      { path: '',             redirectTo: 'agenda', pathMatch: 'full'     },
      { path: 'agenda',       component: MisEventosAgendaComponent        },
      { path: 'organizados',  component: MisEventosOrganizadosComponent, children: [
          { path: 'nuevoEvento',  component: NuevoEventoComponent,  children: [
            { path: 'abierto', component: AbiertoComponent },
            { path: 'cerrado', component: CerradoComponent }
            ]
          }
        ]
      },
      { path: 'pendientes',   component: MisEventosPendientesComponent    }]},
  { path: 'perfil',    component: PerfilComponent  },
  { path: '**', redirectTo: 'eventos' },
];

export const RoutingRoutes = RouterModule.forRoot(routes);
