import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervenantsComponent } from './components/intervenants/intervenants.component';
import { AddIntervenantComponent } from './components/add-intervenant/add-intervenant.component';

const appRoutes: Routes = [
  {
    path: 'liste',
    component: IntervenantsComponent,
    children: [
      { path: 'add', component: AddIntervenantComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class IntervenantsRoutingModule { }
