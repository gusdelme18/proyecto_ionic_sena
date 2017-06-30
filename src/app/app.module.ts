import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { ApiService } from '../app/services/api.services';
import { GlobalVars } from '../app/services/global';
import { ShortText } from '../app/pipes/shortText.pipe';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { PopularMoviesPage } from '../pages/popular-movies/popular-movies';
import { TopRatedMoviesPage } from '../pages/top-rated-movies/top-rated-movies';
import { UpcomingMoviesPage } from '../pages/upcoming-movies/upcoming-movies';
import { DetalleMoviesPage } from '../pages/detalle-movies/detalle-movies';
import { ModalPage } from '../pages/detalle-movies/modal-page';
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ShortText,
    DetalleMoviesPage,
    ModalPage,
    GalleryModal,
    ZoomableImage,
    PopularMoviesPage,
    TopRatedMoviesPage,
    UpcomingMoviesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom', tabsHideOnSubPages: true })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalleMoviesPage,
    ModalPage,
    GalleryModal,
    TabsPage,
    PopularMoviesPage,
    TopRatedMoviesPage,
    UpcomingMoviesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    GlobalVars,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
