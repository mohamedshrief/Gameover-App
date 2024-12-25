import { GameService } from "./api.js";
import { GameUI } from "./ui.js";

const gameService = new GameService();
const gameUI = new GameUI();

async function initializeGames(category = "mmorpg") {
  const games = await gameService.fetchGamesByCategory(category);
  gameUI.renderGameList(games);
}

async function initializeGameDetails(gameId) {
  const game = await gameService.fetchGameDetails(gameId);
  console.log("Fetched Game Details:", game); // تأكد أن البيانات صحيحة
  gameUI.renderGameDetails(game);
}

// Attach the function to the global scope for onclick usage
window.showGameDetails = (gameId) => initializeGameDetails(gameId);

initializeGames();

const categoryLinks = document.querySelectorAll(".category a");
categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".category .active").classList.remove("active");
    link.classList.add("active");
    const category = link.getAttribute("data-category");
    initializeGames(category);
  });
});
