import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApporteursComponent } from './components/apporteurs/apporteurs.component';
import { AddApporteurComponent } from './components/add-apporteur/add-apporteur.component';

const appRoutes: Routes = [
  {
    path: 'liste',
    component: ApporteursComponent,
    children: [
      { path: 'add', component: AddApporteurComponent}
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
export class ApporteursRoutingModule { }
