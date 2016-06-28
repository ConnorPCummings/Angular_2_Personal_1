import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'favorite',
  template:`
      <i
        class="glyphicon"
        [class.glyphicon-star-empty] = "!isFavorite"
        [class.glyphicon-star] = "isFavorite"
        (click) = "onClick()"
      ></i>
      `
})

export class FavoriteComponent{
  @Input("is-favorite") isFavorite = false;
  @Output("changed") change = new EventEmitter();

  onClick($event){
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      isFavorite: this.isFavorite
    });

  }
}
