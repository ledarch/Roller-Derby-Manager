import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatDialogModule,

} from "@angular/material";

const MAT_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatDialogModule,

];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MyMaterialModule { }
