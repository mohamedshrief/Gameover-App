export class Game {
  constructor(
    id,
    title,
    thumbnail,
    genre,
    platform,
    description,
    gameUrl,
    status
  ) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.genre = genre;
    this.platform = platform;
    this.description = description;
    this.gameUrl = gameUrl;
    this.status = status;
  }
}
