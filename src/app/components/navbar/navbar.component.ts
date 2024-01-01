import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>navbar works!</p> `,
  styles: [],
})
export class NavbarComponent {}
