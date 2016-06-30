//created a service that would return twitter data
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TwitterService;
    return {
        setters:[],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.getTweets = function () {
                    return [
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?1",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?2",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?3",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?4",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?5",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docegen app?",
                            imgUrl: "http://lorempixel.com/100/100/people?6",
                            totalLikes: 0,
                            iLike: false
                        }];
                };
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map