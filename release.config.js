module.exports = {
    branch: 'master',
    repositoryUrl: 'git@github.com:hy0ug0/bytes-convert.git',
    verifyConditions: ['@semantic-release/npm'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
                tarballDir: 'build',
            },
        ],
    ],
};
