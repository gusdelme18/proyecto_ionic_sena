import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ApiService } from '../../app/services/api.services';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalPage } from './modal-page';
import { GalleryModal } from 'ionic-gallery-modal';

/**
 * Generated class for the DetalleMoviesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-movies',
  templateUrl: 'detalle-movies.html',
})
export class DetalleMoviesPage {

  selectedMovie: any;
  singleMovie: any;
  genresMovie: any ="";
  videoSrc: SafeResourceUrl;
  gallery: string;
  private photos: any[] = [];



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiService,
    public modalCtrl: ModalController,
    private sanitizer: DomSanitizer) {
    // get Data Movies for Homen
    this.selectedMovie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleMoviesPage');
  }

 

  ngOnInit() {
      this.api.getSingleMovie(this.selectedMovie.id).subscribe(a => {
          this.singleMovie = a;

          for (var _i = 0; _i < a.genres.length; _i++) {
                var num = a.genres[_i];
                this.genresMovie = this.genresMovie + a.genres[_i].name + ",";
            }
          this.api.getVideo(this.selectedMovie.id).subscribe(a => {
            this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+ a.results[0].key + '?html5=1');
          })

          this.api.getImages(this.selectedMovie.id).subscribe(a => {
            console.log(a);
            this.gallery = a.backdrops;

            for (let i = 0; i < a.backdrops.length; i++) {
              this.photos.push({
                url: `http://image.tmdb.org/t/p/w500${a.backdrops[i].file_path}`,
              });
            }
          })

      })      
  }

   playTrailer(element) {
    this.api.getVideo( this.selectedMovie.id).subscribe(a => {
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+ a.results[0].key + '?html5=1');
    })
   
  }

   galleryModal(element) {
     console.log(element);
   let modal = this.modalCtrl.create(GalleryModal, {
        photos: this.photos,
        initialSlide: element,
      });
      modal.present();
  }

}
