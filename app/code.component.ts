import {Component} from 'angular2/core';
import {CodeService} from './code.service';
import {OnFocusDirective} from './on-focus.directive';
import {ColorChangeDirective} from './color-change.directive';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'code',
    template: `
        <div class="col-sm-6">
          <h3>Code</h3>
          <h5 colorChange>this is my sectiong about {{code}}</h5>
          <input type="text"
              [value] = "code"
              (input) = "title = $event.target.value"
              autoGrow/>
          <button type="button"
              class="btn btn-info"
              (click) = "onButtonClick()"
              [style.backgroundColor]="isActive ? 'orange' : 'blue'"
          >Code</button>
          <ul>
              <li *ngFor = "#code of code">
              {{code}}<favorite
              [is-favorite]="course.isFavorite" (changed)="onFavoriteChange($event)"
              ></favorite>
              <heart
              [total-likes]= "heart.totalLikes"
              [likes]= "heart.liked"
              (hearted)="onHeartChange($event)"></heart><span>{{heart.totalLikes}}</span>
              </li>
          </ul>
        </div>
    `,
    providers:[CodeService],
    directives: [OnFocusDirective, ColorChangeDirective, FavoriteComponent,HeartComponent]

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
    onButtonClick($event){
        console.log($event);
        this.isActive = !this.isActive;
    }
    onFavoriteChange($event){
        console.log($event);
    }
    onHeartChange($event){
      console.log($event);
      // this.heart.liked = !this.heart.liked;
      // this.heart.totalLikes += this.heart.liked ? 1 : -1;

    }
    constructor(codeService: CodeService){
      this.code = codeService.getCourse();
    }
}
