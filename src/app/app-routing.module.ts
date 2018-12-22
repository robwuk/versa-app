import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimensionsComponent }  from './dimensions/dimensions.component';
import { LayoutsComponent }     from './layouts/layouts.component';
import { ColoursComponent }     from './colours/colours.component';
import { TrimsComponent }     from './trims/trims.component';

const routes: Routes = [
  { path: 'dimensions', component: DimensionsComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'colours', component: ColoursComponent },
  { path: 'trims', component: TrimsComponent },
  { path: '', redirectTo: '/dimensions', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
