import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecapComponent } from './run/recap/recap.component';

const routes: Routes = [
  // { path: 'run/recap', component: RecapComponent },
  { path: 'run/recap/:id', component: RecapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
