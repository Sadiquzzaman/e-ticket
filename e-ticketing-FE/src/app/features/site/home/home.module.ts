import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SiteLayoutModule } from '../../../blocks/layout/site-layout/site-layout.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [CommonModule, SiteLayoutModule, HomeRoutingModule],
})
export class HomeModule {}
