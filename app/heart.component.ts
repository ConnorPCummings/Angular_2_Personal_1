import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:"heart",
    template:`
      <i class="glyphicon glyphicon-heart"
        [class.liked] = "iLike"
        [class.glyphicon-heart] = "!iLiked"
        (click)="onClick()"
      ></i>
      `,
      styles: [`
        .glyphicon-heart{
            color:grey;
        }
        .liked{
            color:hotpink;
        }`]


})
export class HeartComponent{
 @Input("total-likes") totalLikes = 0;
 @Input("likes") iLike = false;
 @Output("hearted") hearted = new EventEmitter();


  onClick($event){
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
    this.hearted.emit({
      iLike: this.iLike
    });
  }
}
