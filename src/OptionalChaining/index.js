var user = {
    stars: 100,
    totalStars: 0,
    username: "alexandresantosm"
};
var getUser = function (user, options) {
    var avatarUrl = options ? options.fields.avatarUrl : undefined;
    var username = user.username;
    return console.log({ username: username, avatarUrl: avatarUrl });
};
getUser(user, {
    fields: {}
});
