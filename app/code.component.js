System.register(['angular2/core', './code.service', './on-focus.directive', './color-change.directive', './favorite.component', './heart.component'], function(exports_1, context_1) {
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
    var core_1, code_service_1, on_focus_directive_1, color_change_directive_1, favorite_component_1, heart_component_1;
    var CodeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (code_service_1_1) {
                code_service_1 = code_service_1_1;
            },
            function (on_focus_directive_1_1) {
                on_focus_directive_1 = on_focus_directive_1_1;
            },
            function (color_change_directive_1_1) {
                color_change_directive_1 = color_change_directive_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            }],
        execute: function() {
            CodeComponent = (function () {
                function CodeComponent(codeService) {
                    this.isActive = false;
                    this.course = {
                        title: "Title",
                        isFavorite: false
                    };
                    this.heart = {
                        liked: false,
                        totalLikes: 10
                    };
                    this.code = codeService.getCourse();
                }
                CodeComponent.prototype.onButtonClick = function ($event) {
                    console.log($event);
                    this.isActive = !this.isActive;
                };
                CodeComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                CodeComponent.prototype.onHeartChange = function ($event) {
                    console.log($event);
                    // this.heart.liked = !this.heart.liked;
                    // this.heart.totalLikes += this.heart.liked ? 1 : -1;
                };
                CodeComponent = __decorate([
                    core_1.Component({
                        selector: 'code',
                        template: "\n        <div class=\"col-sm-6\">\n          <h3>Code</h3>\n          <h5 colorChange>this is my sectiong about {{code}}</h5>\n          <input type=\"text\"\n              [value] = \"code\"\n              (input) = \"title = $event.target.value\"\n              autoGrow/>\n          <button type=\"button\"\n              class=\"btn btn-info\"\n              (click) = \"onButtonClick()\"\n              [style.backgroundColor]=\"isActive ? 'orange' : 'blue'\"\n          >Code</button>\n          <ul>\n              <li *ngFor = \"#code of code\">\n              {{code}}<favorite\n              [is-favorite]=\"course.isFavorite\" (changed)=\"onFavoriteChange($event)\"\n              ></favorite>\n              <heart\n              [total-likes]= \"heart.totalLikes\"\n              [likes]= \"heart.liked\"\n              (hearted)=\"onHeartChange($event)\"></heart><span>{{heart.totalLikes}}</span>\n              </li>\n          </ul>\n        </div>\n    ",
                        providers: [code_service_1.CodeService],
                        directives: [on_focus_directive_1.OnFocusDirective, color_change_directive_1.ColorChangeDirective, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent]
                    }), 
                    __metadata('design:paramtypes', [code_service_1.CodeService])
                ], CodeComponent);
                return CodeComponent;
            }());
            exports_1("CodeComponent", CodeComponent);
        }
    }
});
//# sourceMappingURL=code.component.js.map