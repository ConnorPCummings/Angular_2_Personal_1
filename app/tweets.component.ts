import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';

@Component({
  selector:"tweets",
  template:`
    <div *ngFor = "#tweet in tweets">
      <tweet [data] = "tweet"></tweet>
    </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})

export class TweetsComponent{
  tweets: any[];

  constructor(tweetService:TweetService){
  this.tweets = tweetService.getTweets()
  }
}
