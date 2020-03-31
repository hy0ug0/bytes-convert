module.exports = {
    branch: 'master',
    repositoryUrl: 'git@github.com:hy0ug0/bytes-convert.git',
    verifyConditions: ['@semantic-release/npm'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'docs', scope: 'README', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
            },
        ],
    ],
};
