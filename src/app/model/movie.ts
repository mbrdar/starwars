export class Movie {
  starships: Array<number>;
  edited: Date;
  vehicles: Array<number>;
  planets: Array<number>;
  producer: string;
  title: string;
  created: Date;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: Array<number>;
  species: Array<number>;
  id: number;

  constructor(movie?: any) {
    this.starships = movie && movie.starships || null;
    this.edited = movie && movie.edited || null;
    this.vehicles = movie && movie.vehicles || null;
    this.planets = movie && movie.planets || null;
    this.producer = movie && movie.producer || null;
    this.title = movie && movie.title || null;
    this.created = movie && movie.created || null;
    this.episode_id = movie && movie.episode_id || null;
    this.director = movie && movie.director || null;
    this.release_date = movie && movie.release_date || null;
    this.opening_crawl = movie && movie.opening_crawl || null;
    this.characters = movie && movie.characters || null;
    this.species = movie && movie.species || null;
    this.id = movie && movie.id || null;
  }
}
