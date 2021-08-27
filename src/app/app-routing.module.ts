import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // lazy load route
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // multi routes
  {
    path: 'sec-route',
    loadChildren: () =>
      import('./second-route/second-route.module').then(
        (m) => m.SecondRouteModule
      ),
    outlet: 'secondOutlet',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
