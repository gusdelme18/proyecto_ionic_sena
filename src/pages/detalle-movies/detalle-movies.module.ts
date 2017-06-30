import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleMoviesPage } from './detalle-movies';

@NgModule({
  declarations: [
    DetalleMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleMoviesPage),
  ],
  exports: [
    DetalleMoviesPage
  ]
})
export class DetalleMoviesPageModule {}
