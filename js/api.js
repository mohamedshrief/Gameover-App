export class GameService {
  constructor() {
    this.loader = document.querySelector(".loading");
    this.errorMessage = document.querySelector(".errorDisplay");
    this.apiConfig = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a1fbcf04c8msh5ad49cd5a3032b5p1fe953jsn514a5addb00e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
  }

  async fetchGamesByCategory(category = "shooter") {
    try {
      this.loader.classList.remove("d-none");
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        this.apiConfig
      );
      const gameList = await response.json();
      this.loader.classList.add("d-none");
      this.errorMessage.classList.add("d-none");
      return gameList;
    } catch (error) {
      console.error("Error fetching games:", error);
      this.loader.classList.add("d-none");
      this.errorMessage.classList.remove("d-none");
      return [];
    }
  }

  async fetchGameDetails(gameId) {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
        this.apiConfig
      );
      const gameDetails = await response.json();
      return gameDetails;
    } catch (error) {
      console.error("Error fetching game details:", error);
      alert("Unable to load game details.");
    }
  }
}
