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
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.totalLikes = 0;
                    this.iLike = false;
                    this.hearted = new core_1.EventEmitter();
                }
                HeartComponent.prototype.onClick = function ($event) {
                    this.iLike = !this.iLike;
                    this.totalLikes += this.iLike ? 1 : -1;
                    this.hearted.emit({
                        iLike: this.iLike
                    });
                };
                __decorate([
                    core_1.Input("total-likes"), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input("likes"), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "iLike", void 0);
                __decorate([
                    core_1.Output("hearted"), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "hearted", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: "heart",
                        template: "\n      <i class=\"glyphicon glyphicon-heart\"\n        [class.liked] = \"iLike\"\n        [class.glyphicon-heart] = \"!iLiked\"\n        (click)=\"onClick()\"\n      ></i>\n      <span>{{totalLikes}}</span>\n      ",
                        styles: ["\n        .glyphicon-heart{\n            color:grey;\n        }\n        .liked{\n            color:hotpink;\n        }"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map