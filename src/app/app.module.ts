import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { EventsComponent } from './pages/events/events.component';
import { PromisesComponent } from './pages/promises/promises.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { AsyncComponent } from './pages/async/async.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    EventsComponent,
    PromisesComponent,
    ObservablesComponent,
    AsyncComponent,
    PipeComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
