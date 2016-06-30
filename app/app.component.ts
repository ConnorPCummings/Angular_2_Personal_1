import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {CodeComponent} from './code.component';
import {SchoolComponent} from './school.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';



@Component({
    selector: 'my-app',
    template: `
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-6 col-sm-offset-3">
          <h1>My First Angular 2 App</h1>
          <h2>Check out my list of things!</h2>
          <courses></courses>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <code></code>
      </div>
      <div class="col-sm-5">
        <school></school>
      </div>
    </div>
    <div class="row">
      <div *ngFor="#tweet of tweets" class="col-sm-12">
        <tweet [data]="tweet" ></tweet>
      </div>
    </div>
    `,
    styles:[`
      .col-sm-6{
        margin-right:auto;
        margin-left:auto;
      }
      `],
    directives: [CoursesComponent, CodeComponent,SchoolComponent,TweetComponent],
    providers: [TweetService]

})
export class AppComponent {
    tweets: any[];
    constructor(tweetService:TweetService){
      this.tweets = tweetService.getTweets()
    }
}
