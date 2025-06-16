import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularLib } from '../../../../projects/angular-lib/src/lib/angular-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularLib],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <lib-angular-lib />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'angular-app';
}
