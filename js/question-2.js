const gamesContainer = document.querySelector(".games-container");

const api = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const apiKey = "cd89f6986063431ab7bab5e6cc27d6ac";

const getGames = async () => {
    try {
        const apiCall = await fetch(api + apiKey);

        const resived = await apiCall.json();

        const games = resived.results;

        gamesContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML +=
                `<div class="game">
                    <h3>${games[i].name}</h3>
                    <p>Rating: ${games[i].rating}</p>
                    <p>Amount of tags: ${games[i].tags.length}</p>
                </div>`
        };
    }

    catch (error) {
        console.log("error accurred", error);
        gamesContainer.innerHTML = "😒 An error occurred, we can unfortunately not offer the service";
    }

    finally {
        console.log("getGames function done");
    }
}

getGames();

