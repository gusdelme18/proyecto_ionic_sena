   
import { Injectable } from '@angular/core';

  @Injectable()
  export class GlobalVars {

   BASE_URL : string= 'http://api.themoviedb.org/3/movie/';
   API_KEY : string= 'f73af121f37f58e4cb77b460e39da5e4';
   NOW_PLAYING: any = [
            {"title":"Now playing",
            "key":"now_playing"}
            ];
   POPULAR: any= [
            {"title": "Popular",
            "key": "popular"}
            ];
   TOP_RATE: any= [
            {"title": "Top rated",
            "key": "top_rated"}
            ];
   UPCOMING: any= [
            {"title": "Upcoming",
            "key": "upcoming"}
            ];

  }