import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRouteComponent } from './second-route.component';

const routes: Routes = [{ path: '', component: SecondRouteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRouteRoutingModule { }
