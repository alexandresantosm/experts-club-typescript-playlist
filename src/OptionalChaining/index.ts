type GithubUser = { username: string, stars: number};

type logOptions = {
    fields?: {
        "user-id"?: number;
        avatarUrl?: string;
        totalStars?: number;
        getStars?: (user: GithubUser) => number;
    };
};

const user = {
    stars: 100,
    totalStars: 0,
    username: "alexandresantosm",
};

const getUser = (user: GithubUser, options?: logOptions) => {
    const avatarUrl = options?.fields?.avatarUrl;
    const userId = options?.fields?.["user-id"];
    const stars = options?.fields?.getStars?.(user);
    const { username } = user;

    return console.log({ userId, username, avatarUrl, stars });
};

getUser(user, {
    fields: {
        "user-id": 1,
        avatarUrl: 'https://avatars0.githubusercontent.com/u/0',
        getStars: (user: GithubUser) => user.stars,
    }
});
