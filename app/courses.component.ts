import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h5>this is my sectiong about {{courses}}</h5>
    <ul>
      <li *ngFor="#courses of courses">
        {{courses}}
      </li>
      <li *ngFor = "#code of code">
        {{code}}
      </li>
    </ul>`,
    providers: [CoursesService]

})
export class CoursesComponent{
  title= "Art";
  courses;

  constructor(coursesService: CoursesService){
      this.courses = coursesService.getCourses();
  }
}
