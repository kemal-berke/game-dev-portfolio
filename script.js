const myGames = [
    {
        title: "Space Invaders Clone",
        desc: "A classic 2D game. Implemented object pooling for projectiles and basic enemy AI patterns.",
        tech: "Unity / C#",
        image: "assets/images/SpaceInvaders.png",
        github: "https://github.com/kemal-berke",
        projectLink: "https://github.com/kemal-berke",
        buttonText: "View Project"
    },
    {
        title: "Ancient Treasure Hunter",
        desc: "A physics-based 2D platformer set in the ruins of Ephesus. Focuses on level design and character controller mechanics.",
        tech: "Unity / C# / Physics",
        image: "assets/images/AncientTreasureHunter.png",
        github: "https://github.com/kemal-berke",
        projectLink: "games/ancient-treasure/index.html",
        buttonText: "Play Now"
    }
];

function drawGames() {
    const container = document.getElementById('game-container');
    if (!container) return;

    container.innerHTML = "";

    myGames.forEach(game => {
        const cardHTML = `
            <div class="game-card">
                <img src="${game.image}" alt="${game.title}" class="game-img">
                <div class="card-content">
                    <div class="tech-tag">${game.tech}</div>
                    <h3>${game.title}</h3>
                    <p>${game.desc}</p>
                    <div class="links">
                        <a href="${game.projectLink}" target="_blank">${game.buttonText}</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

window.onload = drawGames;