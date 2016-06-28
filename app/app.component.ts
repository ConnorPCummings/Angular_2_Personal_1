import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {CodeComponent} from './code.component';
import {SchoolComponent} from './school.component';


@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
                <h2>Check out my list of things!</h2>
                  <courses></courses>
                  <code></code>
                  <school><school>
               `,
    directives: [CoursesComponent, CodeComponent,SchoolComponent]
})
export class AppComponent {

}
