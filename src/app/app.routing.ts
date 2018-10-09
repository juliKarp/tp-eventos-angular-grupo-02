import { RouterModule, Routes } from '@angular/router';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NuevoEventoAbiertoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from './mis-eventos/mis-eventos-organizados/nuevo-evento-cerrado/nuevo-evento-cerrado.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: MisEventosComponent,
    children: [
      {
        path: '', redirectTo: 'agenda', pathMatch: 'full'
      },
      {
        path: 'agenda',
        component: MisEventosAgendaComponent
      },
      {
        path: 'organizados',
        component: MisEventosOrganizadosComponent,
        children: [
          {
            path: 'nuevoEventoCerrado',
            component: NuevoEventoCerradoComponent
          },
          {
            path: 'nuevoEventoAbierto',
            component: NuevoEventoAbiertoComponent
          },
        ]
      },
      {
        path: 'pendientes',
        component: MisEventosPendientesComponent
      }
    ]
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  { path: '**', redirectTo: 'eventos' },
];

export const RoutingRoutes = RouterModule.forRoot(routes);
