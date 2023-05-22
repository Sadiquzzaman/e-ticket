import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SiteLayoutModule } from '../../blocks/layout/site-layout/site-layout.module';
import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SiteLayoutModule, SiteRoutingModule],
  providers: [],
})
export class SiteModule {}
