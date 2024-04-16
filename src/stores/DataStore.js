export const useDataStore = () => ({
  db: {
    cloudCoverage: ['clear skies with minimal cloud cover', 'partly cloudy with scattered clouds', 'mostly cloudy with occasional breaks of sunshine', 'overcast with thick cloud cover', 'cloudy with a chance of showers'],
    temperature: ['15°C with a cool breeze', '20°C with a mild breeze', '25°C with comfortable temperatures', '30°C with a heatwave warning', '35°C with scorching temperatures'],
    windSpeed: ['5 km/h winds with light breezes', '10 km/h winds with occasional gusts', '15 km/h winds with moderate breezes', '20 km/h winds with strong gusts', '25 km/h winds with sustained breezes']
  },
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
