import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './components/prestations/prestations.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './components/edit-prestation/edit-prestation.component';

const appRoutes: Routes = [
  {
    path: 'liste',
    component: PrestationsComponent,
    data: {collection: 'prestations'},
    children: [
      { path: 'add', component: AddPrestationComponent, data: {collection: 'prestations'}},
      { path: 'edit', component: EditPrestationComponent, data: {collection: 'prestations'}}
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
export class PrestationsRoutingModule { }
