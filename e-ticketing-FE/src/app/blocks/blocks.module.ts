import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlocksRoutingModule } from './blocks-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './root/app.component';
import { SharedModule } from '../shared/shared.module';

export const blockComponents = [AppComponent, NotFoundComponent];

@NgModule({
  imports: [CommonModule, BlocksRoutingModule, SharedModule],
  declarations: [...blockComponents],
  exports: [...blockComponents],
})
export class BlocksModule {}
