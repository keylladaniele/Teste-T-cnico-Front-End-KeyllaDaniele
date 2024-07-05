import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from 'src/carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CarouselComponent,
  ]
})
export class MaterialModule { }
