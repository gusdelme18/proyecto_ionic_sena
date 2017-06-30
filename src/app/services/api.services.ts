import {Injectable} from '@angular/core';
import {Http, Headers, RequestMethod, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { GlobalVars } from '../services/global';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

    constructor (
        private http: Http,
        public globalVars: GlobalVars
    ) {}

    getMoviesByPage(id?, item?) {

        let api_key: string =  this.globalVars.API_KEY;
        let url: string = this.globalVars.BASE_URL+'popular?api_key='+api_key+'&page=' + id;
        let type: any = RequestMethod.Get;
        let body: any;

        // Define the options for the request
        let options = {
            method: type,
            url: url,
            body: null
        };

        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }

        // If authHeader is true we need to append the token to the header
        //if (authHeader) options.headers.append('Authorization', 'Basic a3Jlc29nYWxpYzg6WmlkYW5lNTU1');

        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });
    }

    getMovie(id?, item?){
     
        let api_key: string =  this.globalVars.API_KEY;
        let url: string = this.globalVars.BASE_URL+id+'?api_key=' + api_key;
        let type: any = RequestMethod.Get;
        let body: any;

        // Define the options for the request
        let options = {
            method: type,
            url: url,
            body: null
        };

        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }

        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });



    }
    getSingleMovie(id?, item?){
     
        let api_key: string =  this.globalVars.API_KEY;
        let url: string = this.globalVars.BASE_URL+id+'?api_key=' + api_key;
        let type: any = RequestMethod.Get;
        let body: any;

        // Define the options for the request
        let options = {
            method: type,
            url: url,
            body: null
        };

        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }

        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });



    }
    getVideo(id?, item?){
     
        let api_key: string =  this.globalVars.API_KEY;
        let url: string = this.globalVars.BASE_URL+id+'/videos?api_key=' + api_key;
        let type: any = RequestMethod.Get;
        let body: any;

        // Define the options for the request
        let options = {
            method: type,
            url: url,
            body: null
        };

        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }

        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });



    }
    getImages(id?, item?){
     
        let api_key: string =  this.globalVars.API_KEY;
        let url: string = this.globalVars.BASE_URL+id+'/images?api_key=' + api_key;
        let type: any = RequestMethod.Get;
        let body: any;

        // Define the options for the request
        let options = {
            method: type,
            url: url,
            body: null
        };

        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }

        return this.http.request(new Request(options))
            .map(res => res.json())

            .catch(error => {
                return Observable.throw(error);
            });



    }
}
