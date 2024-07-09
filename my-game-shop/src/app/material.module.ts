import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CarouselComponent,
    MatPaginatorModule,
    MatSidenavModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
