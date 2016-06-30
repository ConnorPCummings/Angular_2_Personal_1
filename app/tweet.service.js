//created a service that would return twitter data
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
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
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map