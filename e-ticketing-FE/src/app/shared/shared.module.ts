import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { FooterComponent } from './components/features/site/footer/footer.component';
import { HeaderComponent } from './components/features/site/header/header.component';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ...components,
  ],
  providers: [],
})
export class SharedModule {}
