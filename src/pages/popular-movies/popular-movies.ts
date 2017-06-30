import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {ShortText} from '../../app/pipes/shortText.pipe';
import { LoadingController, NavController, NavParams} from 'ionic-angular';
import {DetalleMoviesPage} from '../detalle-movies/detalle-movies';
import { ApiService } from '../../app/services/api.services';
import { GlobalVars } from '../../app/services/global';


@Component({
  selector: 'page-popular-movies',
  templateUrl: 'popular-movies.html',
})

@NgModule({
    declarations:[
        ShortText
    ]
})

export class PopularMoviesPage {

movies: Array<{}> = [];
  loading: LoadingController;
  title: string;
  private _page:number=2; 
  private _loadingProgress = false; 

  constructor(
    public navCtrl: NavController, navParams: NavParams,
      
      private api: ApiService,
      private loadingCtrl: LoadingController,
      public globalVars: GlobalVars) {

  }

  ngOnInit() {
        let loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        loading.present();
        this.title = this.globalVars.POPULAR[0].title;

        // // Get Movies Now Playing
         this.api.getMovie(this.globalVars.POPULAR[0].key).subscribe(a => {
                console.log(a);
           
                    this.movies = a.results.map(b => {
                        return {
                            id: b.id,
                            title: b.title,
                            image: b.poster_path,
                            overview: b.overview,
                            rating: b.vote_average
                        }
                    })
                     loading.dismiss();
                });
    }

// get single movie
  getMovieDetalle(event, movie) {
        //this.api.getSingleMovie(movie.id).subscribe(a => console.log(a))
        this.navCtrl.push(DetalleMoviesPage, {
            movie: movie
        });
    }

  // infite scroll for movies
  doInfinite(infiniteScroll) {
    if(!this._loadingProgress) {
        this._loadingProgress = true;
        this.api.getMoviesByPage( this._page).subscribe(
            res => {
                console.log(res);
                this._page += 1;
                res.results.forEach(b => {
                    this.movies.push({
                        id: b.id,
                        title: b.title,
                        image: b.poster_path,
                        overview: b.overview,
                        rating: b.vote_average
                    })
                })
                setTimeout(() => {
                    this._loadingProgress = false;
                }, 500)
            }
        )
    }
    infiniteScroll.complete();
  }
}

