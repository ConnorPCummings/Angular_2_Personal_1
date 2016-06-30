import {Component, Input} from 'angular2/core';
import {HeartComponent} from './heart.component';
import {TweetService} from './tweet.service';

@Component({
  selector:"tweet",
  template:`
    <div class="col-sm-6">
      <ul class="media-list">
        <li class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="{{data.imgUrl}}" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              {{data.author}}  <span>{{data.handle}}</span>
            </h4>

            <p>
              {{data.body}}
            </p>
            <heart></heart>
          </div>
        </li>
    </ul>
  </div>

  `,
  directives: [HeartComponent]
})
export class TweetComponent{
  @Input() data;
  constructor(){
    console.log(this.data)
  }
}
