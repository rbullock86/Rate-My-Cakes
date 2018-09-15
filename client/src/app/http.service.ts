import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }
  
  getCakes(){
    return this._http.get('/api/cakes');
  }
  getCake(id: String){
    return this._http.get('/api/cakes/' + id);
  }
  makeCake(newCake){
    return this._http.post('/api/cakes', newCake);
  }
  makeReview(id, newReview){
    console.log('in service.makeReview');
    console.log('/api/cakes/' + id + '/reviews');
    return this._http.put('/api/cakes/' + id + '/reviews', newReview);
  }
}
