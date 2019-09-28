import { RestService } from "./restService"

export class GitHubService extends RestService {
  public constructor() {
    super("https://api.github.com");
  }

  public async pulls(owner: string, repo: string): Promise<any[]> {
    return await this.get(`/repos/${owner}/${repo}/pulls`);
  }

  public async userEvents(username: string): Promise<any[]> {
    return await this.get(`/users/${username}/events`);
  }
}