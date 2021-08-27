import { Component, OnInit } from '@angular/core';
import { Router, ResolveStart, ResolveEnd } from '@angular/router';
import { Observable, merge } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <p *ngIf="loading$ | async">
      your loader will appear only when you try to reach route resolve data
    </p>
    <p>App Works</p>
    <router-outlet></router-outlet>
    <router-outlet name="second-outlet"></router-outlet>
  `,
  styles: [''],
})
export class AppComponent implements OnInit {
  title = 'general-t';

  // this approach used to handel loading strategies in your app with aid of resolvers
  loading$!: Observable<boolean>;
  private loadingStart$!: Observable<boolean>;
  private loadingEnd$!: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadingStart$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveStart),
      mapTo(true)
    );

    this.loadingEnd$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveEnd),
      mapTo(false)
    );

    this.loading$ = merge(this.loadingStart$, this.loadingEnd$);
  }
}
