export class GameUI {
  renderGameList(games) {
    let htmlContent = "";
    games.forEach((game) => {
      htmlContent += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card bg-transparent text-white" data-game-id="${game.id}">
              <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
              <div class="card-body d-flex justify-content-between">
                <h5 class="card-title">${game.title}</h5>
                <span class="badge text-bg-primary d-flex justify-content-center align-items-center">Free</span>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span class="badge text-bg-secondary">${game.genre}</span>
                <span class="badge text-bg-secondary">${game.platform}</span>
              </div>
            </div>
          </div>
        `;
    });
    document.getElementById("gameList").innerHTML = htmlContent;

    // Event Delegation
    document.getElementById("gameList").addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card && card.dataset && card.dataset.gameId) {
        window.showGameDetails(card.dataset.gameId);
      } else {
        console.error("Card element or gameId not found.");
      }
    });
  }

  renderGameDetails(game) {
    console.log("Rendering game details for:", game);

    const htmlContent = `
        <div class="container text-white rounded-4 p-4">
          <div class="d-flex justify-content-between">
            <h2>${game.title}</h2>
            <button type="button" class="btn-close text-white" id="closeGameDetailsBtn" aria-label="Close"></button>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <img src="${game.thumbnail}" alt="${game.title}" class="img-fluid">
            </div>
            <div class="col-md-8">
              <h4>Status: ${game.status}</h4>
              <p>${game.description}</p>
              <a href="${game.game_url}" target="_blank" class="btn btn-outline-success">Show Game</a>
            </div>
          </div>
        </div>
      `;

    const gameDetailsContainer = document.getElementById("gameInfo");
    console.log("Game Info Container:", gameDetailsContainer);
    if (gameDetailsContainer) {
      gameDetailsContainer.innerHTML = htmlContent;

      gameDetailsContainer.classList.remove("d-none");

      document
        .getElementById("closeGameDetailsBtn")
        .addEventListener("click", () => {
          gameDetailsContainer.classList.add("d-none");
        });
    } else {
      console.error("Game info container not found.");
    }
  }
}
