type GithubUser = { username: string};

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
    const avatarUrl = options 
        ? options.fields 
            ? options.fields.avatarUrl
            : undefined
        : undefined;
        
    const { username } = user;
    return console.log({ username, avatarUrl });
};

getUser(user, {});
