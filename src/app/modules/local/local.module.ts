import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';
import { LocalTableComponent } from './local-table/local-table.component';
import { LocalAddComponent } from './local-add/local-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LocalComponent,
    LocalTableComponent,
    LocalAddComponent
  ],
  imports: [
    CommonModule,
    LocalRoutingModule,
    AgGridModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LocalModule { }
