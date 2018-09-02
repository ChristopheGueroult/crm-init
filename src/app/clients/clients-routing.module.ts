import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const appRoutes: Routes = [
  {
    path: 'liste',
    component: ClientsComponent,
    children: [
      { path: 'add', component: AddClientComponent}
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
export class ClientsRoutingModule { }
