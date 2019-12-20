import { NgModule } from '@angular/core';

import { AComponent } from './a.component';
import { Routes, RouterModule } from '@angular/router';

const aRoutes: Routes = [
  { path: '', component: AComponent, },
];

@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    RouterModule.forChild(aRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AModule { }
