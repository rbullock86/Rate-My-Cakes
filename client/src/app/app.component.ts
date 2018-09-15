import { Component , OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakeToShow;
  _newCake: any; 
  _allCakes: any;
  _shownCake: any;
  _newReviews: any = [];
  _shownCakeAverage: any;
  
  constructor(private _httpService: HttpService) {
    this._allCakes = this.getCakes();
  }

  ngOnInit() {
    this._shownCake = { bakerName : "", cakeImage : ""};
    this._newCake = { bakerName : "", cakeImage : ""}
  }

  getCakes() {
    let observable = this._httpService.getCakes();
    this._newReviews = [];
    observable.subscribe(data => {
      console.log("Data", data);
      this._allCakes = data;
      console.log("size of cake array: ", this._allCakes.length)
      for(let i = 0; i < this._allCakes.length; i++){
        console.log("this cake:", i,  this._allCakes[i]);
        this._newReviews.push(
          {
            'cakeID' : this._allCakes[i]._id,
            'newReview' : {
              'rating' : "",
              'comment' : ""
            }
          }
        )
        console.log("new Reviews:", this._newReviews);
      }
    })
  }

  getCake(id: String) {
    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      console.log("Data", data);
      this._shownCake = data;
      console.log("shownCake review count:", this._shownCake.reviews.length);
      if(this._shownCake.reviews.length == 0){
        this._shownCakeAverage = "N/A";
      }
      else{
        let sum = 0;
        console.log("in else: ", this._shownCake);
        for (let i = 0; i < this._shownCake.reviews.length; i++){
          console.log("Rating:", this._shownCake.reviews[i].rating, "Stars");
          sum += this._shownCake.reviews[i].rating;
        }
        this._shownCakeAverage = (sum/this._shownCake.reviews.length).toFixed(1);
      }
    })
  }

  makeCake() {
    let observable = this._httpService.makeCake(this._newCake);
    observable.subscribe(data => {
      console.log("Data:", data);
      this._newCake = { bakerName: "", cakeImage: ""};
    })
    this.getCakes();
  }

  makeReview(cakeID, newReview) {
    console.log("Review cakeId:", cakeID);
    console.log("Review newReview:", newReview);
    let observable = this._httpService.makeReview(cakeID, newReview);
    observable.subscribe(data => {
      console.log("Data:", data);
    })
    this._newReviews = [];
    this.getCakes();
  }
}
