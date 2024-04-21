// Video Game Summary Object Creator

const game = {
 title: "Super Mario",
 developer: "Nintendo",
 genre: "Platformer",
 releaseYear: 1985,
 rating: "9.1/10",
};

function getGameSummaryInObject(game) {
 return {
  title: game.title,
  developer: game.developer,
  summary: `${game.title} is a ${game.genre} game developed by ${game.developer}, released in ${game.releaseYear}. It has a rating of ${game.rating}.`,
 };
}

const gameSummary = getGameSummaryInObject(game);
console.log("Gamesummary", gameSummary);
