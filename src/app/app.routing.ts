import { RouterModule, Routes } from '@angular/router';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';
import { MisEventosOrganizadosComponent } from './mis-eventos/mis-eventos-organizados/mis-eventos-organizados.component';
import { MisEventosPendientesComponent } from './mis-eventos/mis-eventos-pendientes/mis-eventos-pendientes.component';


const routes: Routes = [
  {
    path: 'eventos', children: [
      {
        path: '', redirectTo: '/eventos/agenda', pathMatch: 'full'
      }, {
        path: 'agenda',
        component: MisEventosAgendaComponent
      },
      {
        path: 'organizados',
        component: MisEventosOrganizadosComponent
      },
      {
        path: 'pendientes',
        component: MisEventosPendientesComponent
      }
    ]
  },
  { path: '**', redirectTo: '/eventos/agenda' },
];

export const RoutingRoutes = RouterModule.forRoot(routes);
