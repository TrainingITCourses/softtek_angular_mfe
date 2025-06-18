import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularLib } from '../../../../projects/angular-lib/src/lib/angular-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularLib, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <span>
      <a [routerLink]="['/']" [queryParams]="{ st: 'AAPL' }">AAPL</a></span
    >
    <span>
      <a [routerLink]="['/']" [queryParams]="{ st: 'GOOG' }">GOOG</a></span
    >
    <span>
      <a [routerLink]="['/']" [queryParams]="{ st: 'MSFT' }">MSFT</a></span
    >
    <span>
      <a [routerLink]="['/']" [queryParams]="{ st: 'AMZN' }">AMZN</a></span
    >
    <span>
      <a [routerLink]="['/']" [queryParams]="{ st: 'TSLA' }">TSLA</a></span
    >
    <lib-angular-lib />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'angular-app';
}
