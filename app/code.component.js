System.register(['angular2/core', './code.service', './on-focus.directive', './color-change.directive', './favorite.component', './heart.component', './up-or-down.component'], function(exports_1, context_1) {
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
    var core_1, code_service_1, on_focus_directive_1, color_change_directive_1, favorite_component_1, heart_component_1, up_or_down_component_1;
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
            },
            function (up_or_down_component_1_1) {
                up_or_down_component_1 = up_or_down_component_1_1;
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
                    this.vote = {
                        totalLikes: 10
                    };
                    this.choice = {
                        voteCount: 10,
                        myVote: 0
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
                };
                CodeComponent.prototype.onVoteChoice = function ($event) {
                    console.log($event);
                };
                CodeComponent = __decorate([
                    core_1.Component({
                        selector: 'code',
                        templateUrl: './app/code.template.html',
                        providers: [code_service_1.CodeService],
                        directives: [on_focus_directive_1.OnFocusDirective, color_change_directive_1.ColorChangeDirective, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, up_or_down_component_1.UpOrDownComponent]
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