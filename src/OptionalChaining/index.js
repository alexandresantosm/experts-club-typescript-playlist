var user = {
    stars: 100,
    totalStars: 0,
    username: "alexandresantosm"
};
var getUser = function (user) {
    var username = user.username;
    return console.log({ username: username });
};
getUser(user);
