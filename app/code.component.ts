import {Component} from 'angular2/core';
import {CodeService} from './code.service';
import {OnFocusDirective} from './on-focus.directive';
import {ColorChangeDirective} from './color-change.directive';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';
import {UpOrDownComponent} from './up-or-down.component';

@Component({
    selector: 'code',
    templateUrl: './app/code.template.html',
    styles:[`

      div{
        background:white;
        border-radius:5px;
      }
      `],
    providers:[CodeService],
    directives: [OnFocusDirective, ColorChangeDirective, FavoriteComponent,HeartComponent, UpOrDownComponent]

})

export class CodeComponent{
    code;
    isActive = false;
    course={
      title : "Title",
      isFavorite : false
    }
    heart={
      liked: false,
      totalLikes: 10
    }
    vote={
      totalLikes: 10

    }
    choice={
      voteCount : 10,
      myVote : 0
    }
    onButtonClick($event){
        console.log($event);
        this.isActive = !this.isActive;
    }
    onFavoriteChange($event){
        console.log($event);
    }
    onHeartChange($event){
      console.log($event);
    }
    onVoteChoice($event){
      console.log($event);
    }
    constructor(codeService: CodeService){
      this.code = codeService.getCourse();
    }
}
