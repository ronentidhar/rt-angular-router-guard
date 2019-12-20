import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombinedGuard } from './guards/combined.guard';
import { BGuard } from './guards/b.guard';
import { AGuard } from './guards/a.guard';
import { CGuard } from './guards/c.guard';
import { DGuard } from './guards/d.guard';


const routes: Routes = [
  {
    path: 'a', loadChildren: () => import('./modules/a/a.module').then(mod => mod.AModule),
    data: { guards: [AGuard, BGuard] }, canActivate: [CombinedGuard]
  },
  {
    path: 'b', loadChildren: () => import('./modules/b/b.module').then(mod => mod.BModule),
    data: { guards: [AGuard, CGuard, DGuard] }, canActivate: [CombinedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
