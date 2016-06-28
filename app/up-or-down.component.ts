import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
  selector: "vote",
  template: `
    <div>
      <i
        class="glyphicon glyphicon-thumbs-up"
        [class.highlighted]= "myVote == 1"
        (click) = "upVote($event)"
      ></i>
      <span class="vote-count">{{voteCount + myVote}}</span>
      <i
        class="glyphicon glyphicon-thumbs-down"
        [class.highlighted]= "myVote == -1"
        (click) = "downVote()"
      ></i>
    </div>
  `,
  styles: [`
    .glyphicon{
      color:grey;
    }
    .highlighted{
      color:forestgreen;
    }
    div{
      width:20px;
    }
    .vote-count{
      color:grey;
    }
    `]
})
export class UpOrDownComponent{

  @Input("voteCount") voteCount= 0;
  @Input("myVote") myVote = 0;
  @Output("vote") vote = new EventEmitter();

  upVote($event){
    if(this.myVote == 1)
        return;
    this.myVote++;
    this.vote.emit({ myVote: this.myVote });
  }
  downVote($event){
    if(this.myVote == -1)
      return;
    this.myVote--;
    this.vote.emit({ myVote: this.myVote });
  }

}
