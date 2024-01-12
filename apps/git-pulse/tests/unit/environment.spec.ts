import dotenv from 'dotenv';

describe('Environment Variables', () => {
  beforeAll(() => {
    dotenv.config();
  });

  it('GITHUB_ACCESS_TOKEN should be defined', () => {
    const githubAccessToken = process.env.GITHUB_ACCESS_TOKEN;

    expect(githubAccessToken).toBeDefined();
    expect(githubAccessToken).not.toEqual('');
  });
});
