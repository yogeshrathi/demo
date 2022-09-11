import { LocalComponent } from './local.component';
import { LocalAddComponent } from './local-add/local-add.component';
import { LocalTableComponent } from './local-table/local-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: LocalTableComponent
      },
      {
        path: 'add',
        component: LocalAddComponent
      }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }
