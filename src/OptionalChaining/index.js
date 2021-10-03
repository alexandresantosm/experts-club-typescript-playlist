var user = {
    stars: 100,
    totalStars: 0,
    username: "alexandresantosm"
};
var getUser = function (user, options) {
    var _a, _b, _c, _d, _e, _f;
    var totalStars = (_b = (_a = options === null || options === void 0 ? void 0 : options.fields) === null || _a === void 0 ? void 0 : _a.totalStars) !== null && _b !== void 0 ? _b : 1;
    var avatarUrl = (_c = options === null || options === void 0 ? void 0 : options.fields) === null || _c === void 0 ? void 0 : _c.avatarUrl;
    var userId = (_d = options === null || options === void 0 ? void 0 : options.fields) === null || _d === void 0 ? void 0 : _d["user-id"];
    var stars = (_f = (_e = options === null || options === void 0 ? void 0 : options.fields) === null || _e === void 0 ? void 0 : _e.getStars) === null || _f === void 0 ? void 0 : _f.call(_e, user);
    var username = user.username;
    return console.log({ userId: userId, username: username, avatarUrl: avatarUrl, stars: stars, totalStars: totalStars });
};
getUser(user, {
    fields: {
        totalStars: 0,
        "user-id": 1,
        avatarUrl: 'https://avatars0.githubusercontent.com/u/0',
        getStars: function (user) { return user.stars; }
    }
});
