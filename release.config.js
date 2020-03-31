module.exports = {
    branch: 'master',
    repositoryUrl: 'git@github.com:hy0ug0/bytes-convert.git',
    verifyConditions: ['@semantic-release/npm'],
    plugins: [
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
            },
        ],
    ],
};
