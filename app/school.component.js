System.register(['angular2/core', './school.service', './favorite.component', './heart.component'], function(exports_1, context_1) {
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
    var core_1, school_service_1, favorite_component_1, heart_component_1;
    var SchoolComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (school_service_1_1) {
                school_service_1 = school_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            }],
        execute: function() {
            SchoolComponent = (function () {
                function SchoolComponent(schoolService) {
                    this.title = "Code";
                    this.post = {
                        title: "title",
                        isFavorite: false
                    };
                    this.heart = {
                        liked: false,
                        totalLikes: 10
                    };
                    this.school = schoolService.getCourse();
                }
                SchoolComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                SchoolComponent.prototype.onHeartChange = function ($event) {
                    console.log($event);
                };
                SchoolComponent = __decorate([
                    core_1.Component({
                        selector: 'school',
                        template: "\n    <div class=\"col-sm-6\">\n      <h3>School</h3>\n      <h5>this is my sectiong about {{school}}</h5>\n      <input placeholder = \"code\" type=\"text\" [(ngModel)]= \"title\"/>\n      <button class=\"btn btn-info\" type=\"submit\" (click)=\"title= ''\">{{title}}</button>\n      <span>{{title}}</span>\n      <ul>\n          <li *ngFor = \"#school of school\">\n          {{school}}\n          <favorite\n          [is-favorite] = \"post.isFavorite\"\n          (changed)=\"onFavoriteChange($event)\"\n          ></favorite>\n          <heart\n          [total-likes]=\"heart.totalLikes\"\n          [likes]=\"heart.liked\"\n          (hearted) = \"onHeartChange($event)\"\n          ></heart>\n          </li>\n      </ul>\n    </div>\n  ",
                        providers: [school_service_1.SchoolService],
                        directives: [favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent]
                    }), 
                    __metadata('design:paramtypes', [school_service_1.SchoolService])
                ], SchoolComponent);
                return SchoolComponent;
            }());
            exports_1("SchoolComponent", SchoolComponent);
        }
    }
});
//# sourceMappingURL=school.component.js.map