import { NgModule } from '@angular/core';

import { BComponent } from './b.component';
import { Routes, RouterModule } from '@angular/router';

const aRoutes: Routes = [
  { path: '', component: BComponent, },
];

@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    RouterModule.forChild(aRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class BModule { }
