import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class SiteLayoutModule {}
