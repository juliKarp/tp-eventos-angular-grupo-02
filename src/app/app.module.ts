import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { MisEventosAgendaComponent } from './mis-eventos/mis-eventos-agenda/mis-eventos-agenda.component';

@NgModule({
   declarations: [
      AppComponent,
      MisEventosComponent,
      MisEventosAgendaComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
