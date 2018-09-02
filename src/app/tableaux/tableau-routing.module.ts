import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { TableauxComponent } from './components/tableaux/tableaux.component';

const appRoutes: Routes = [
  {
    path: 'liste-prestations',
    component: TableauxComponent,
    data: {collection: 'prestations'},
    children: [
      { path: 'add-prestation', component: AddComponent, data: {collection: 'prestations'}},
      { path: 'edit-prestation', component: EditComponent, data: {collection: 'prestations'}}
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
export class TableauRoutingModule { }
