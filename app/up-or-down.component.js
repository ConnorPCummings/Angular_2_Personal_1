System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UpOrDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UpOrDownComponent = (function () {
                function UpOrDownComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                UpOrDownComponent.prototype.upVote = function ($event) {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                UpOrDownComponent.prototype.downVote = function ($event) {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input("voteCount"), 
                    __metadata('design:type', Object)
                ], UpOrDownComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input("myVote"), 
                    __metadata('design:type', Object)
                ], UpOrDownComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output("vote"), 
                    __metadata('design:type', Object)
                ], UpOrDownComponent.prototype, "vote", void 0);
                UpOrDownComponent = __decorate([
                    core_1.Component({
                        selector: "vote",
                        template: "\n    <div>\n      <i\n        class=\"glyphicon glyphicon-thumbs-up\"\n        [class.highlighted]= \"myVote == 1\"\n        (click) = \"upVote($event)\"\n      ></i>\n      <span class=\"vote-count\">{{voteCount + myVote}}</span>\n      <i\n        class=\"glyphicon glyphicon-thumbs-down\"\n        [class.highlighted]= \"myVote == -1\"\n        (click) = \"downVote()\"\n      ></i>\n    </div>\n  ",
                        styles: ["\n    .glyphicon{\n      color:grey;\n    }\n    .highlighted{\n      color:forestgreen;\n    }\n    div{\n      width:20px;\n    }\n    .vote-count{\n      color:grey;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UpOrDownComponent);
                return UpOrDownComponent;
            }());
            exports_1("UpOrDownComponent", UpOrDownComponent);
        }
    }
});
//# sourceMappingURL=up-or-down.component.js.map