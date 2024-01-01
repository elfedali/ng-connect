import { Component } from '@angular/core';

@Component({
  selector: "app-default",
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DefaultComponent {}
