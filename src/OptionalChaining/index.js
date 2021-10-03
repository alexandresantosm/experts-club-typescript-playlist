var user = {
    stars: 100,
    totalStars: 0,
    username: "alexandresantosm"
};
var getUser = function (user, options) {
    var _a, _b, _c, _d;
    var avatarUrl = (_a = options === null || options === void 0 ? void 0 : options.fields) === null || _a === void 0 ? void 0 : _a.avatarUrl;
    var userId = (_b = options === null || options === void 0 ? void 0 : options.fields) === null || _b === void 0 ? void 0 : _b["user-id"];
    var stars = (_d = (_c = options === null || options === void 0 ? void 0 : options.fields) === null || _c === void 0 ? void 0 : _c.getStars) === null || _d === void 0 ? void 0 : _d.call(_c, user);
    var username = user.username;
    return console.log({ userId: userId, username: username, avatarUrl: avatarUrl, stars: stars });
};
getUser(user);
getUser(user, {
    fields: {
        "user-id": 1,
        avatarUrl: 'https://avatars0.githubusercontent.com/u/0',
        getStars: function (user) { return user.stars; }
    }
});
