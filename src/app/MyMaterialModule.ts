import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatPaginatorModule

} from "@angular/material";

const MAT_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatPaginatorModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MyMaterialModule { }
