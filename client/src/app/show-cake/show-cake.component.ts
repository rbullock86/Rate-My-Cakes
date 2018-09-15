import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {
  @Input() shownCake: any;
  @Input() shownCakeAverage: any;
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
  }

}
