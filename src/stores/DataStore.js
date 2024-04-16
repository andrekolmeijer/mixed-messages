export const useDataStore = () => ({
  author: {
    name: 'André Kolmeijer',
    website: 'https://andrekolmeijer.nl',
    profile: 'andrekolmeijer',
    repo: 'mixed-messages'
  },
  provider: {
    github: 'https://github.com',
    nodejs: 'https://nodejs.org',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com'
  },
  get url() {
    return {
      'github-repo': `${this.provider.github}/${this.author.profile}/${this.author.repo}`,
      'github-profile': `${this.provider.github}/${this.author.profile}`,
      'twitter-profile': `${this.provider.twitter}/${this.author.profile}`,
      'linkedin-profile': `${this.provider.linkedin}/in/${this.author.profile}`,
    }
  }
});
