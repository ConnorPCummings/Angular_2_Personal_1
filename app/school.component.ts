import {Component} from 'angular2/core';
import {SchoolService} from './school.service';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';

@Component({
  selector: 'school',
  template: `
    <div class="col-sm-6">
      <h3>School</h3>
      <h5>this is my sectiong about {{school}}</h5>
      <input placeholder = "code" type="text" [(ngModel)]= "title"/>
      <button class="btn btn-info" type="submit" (click)="title= ''">{{title}}</button>
      <span>{{title}}</span>
      <ul>
          <li *ngFor = "#school of school">
          {{school}}
          <favorite
          [is-favorite] = "post.isFavorite"
          (changed)="onFavoriteChange($event)"
          ></favorite>
          <heart
          [total-likes]="heart.totalLikes"
          [likes]="heart.liked"
          (hearted) = "onHeartChange($event)"></heart>
          </li>
      </ul>
    </div>
  `,
  styles: [`
    div{
        background:white;
        border-radius:5px;
      }
      `]
  providers: [SchoolService],
  directives: [FavoriteComponent, HeartComponent]
})

export class SchoolComponent{
 title="Code";
  school;
  post={
    title: "title",
    isFavorite: false
  }
  heart={
    liked: false,
    totalLikes: 10
  }
  onFavoriteChange($event){
    console.log($event);
  }
  onHeartChange($event){
    console.log($event);
  }
  constructor(schoolService:SchoolService){
    this.school = schoolService.getCourse();
  }
}
