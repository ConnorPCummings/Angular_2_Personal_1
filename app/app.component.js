System.register(['angular2/core', './courses.component', './code.component', './school.component', './tweet.component', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, code_component_1, school_component_1, tweet_component_1, tweet_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (code_component_1_1) {
                code_component_1 = code_component_1_1;
            },
            function (school_component_1_1) {
                school_component_1 = school_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6 col-sm-offset-3\">\n          <h1>My First Angular 2 App</h1>\n          <h2>Check out my list of things!</h2>\n          <courses></courses>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <code></code>\n      </div>\n      <div class=\"col-sm-5\">\n        <school></school>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"#tweet of tweets\" class=\"col-sm-12\">\n        <tweet [data]=\"tweet\" ></tweet>\n      </div>\n    </div>\n    ",
                        styles: ["\n      .col-sm-6{\n        margin-right:auto;\n        margin-left:auto;\n      }\n      "],
                        directives: [courses_component_1.CoursesComponent, code_component_1.CodeComponent, school_component_1.SchoolComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map