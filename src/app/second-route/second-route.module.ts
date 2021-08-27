import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRouteRoutingModule } from './second-route-routing.module';
import { SecondRouteComponent } from './second-route.component';


@NgModule({
  declarations: [
    SecondRouteComponent
  ],
  imports: [
    CommonModule,
    SecondRouteRoutingModule
  ]
})
export class SecondRouteModule { }
