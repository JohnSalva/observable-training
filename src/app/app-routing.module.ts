import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { EventsComponent } from './pages/events/events.component';
import { PromisesComponent } from './pages/promises/promises.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { AsyncComponent } from './pages/async/async.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';


const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full'
  },
  { path: 'events', component: EventsComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'async', component: AsyncComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
