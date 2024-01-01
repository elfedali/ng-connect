import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, DefaultRoutingModule, NavbarComponent],
})
export class DefaultModule {}
