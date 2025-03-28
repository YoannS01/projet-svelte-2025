<script lang="ts">
    import { onMount } from "svelte";

    let catImage: string = "";
    let catBreed: string = "Race inconnue";
    let catOrigin: string = "";
    let catDescription: string = "";
    let favoriteCats: {
        image: string;
        breed: string;
        origin: string;
        description: string;
    }[] = [];

    // Fonction pour récupérer les données du chat
    async function getCatData() {
        const res = await fetch(
            "https://api.thecatapi.com/v1/images/search?include_breeds=true",
        );
        const data = await res.json();

        if (data && data[0]) {
            catImage = data[0].url;

            if (data[0].breeds && data[0].breeds.length > 0) {
                catBreed = data[0].breeds[0].name;
                catOrigin = data[0].breeds[0].origin;
                catDescription = data[0].breeds[0].description;
            } else {
                catBreed = "Race inconnue";
                catOrigin = "";
                catDescription = "";
            }
        }
    }

    // Fonction pour ajouter aux favoris
    function addToFavorites() {
        if (catImage && !favoriteCats.some((cat) => cat.image === catImage)) {
            favoriteCats = [
                ...favoriteCats,
                {
                    image: catImage,
                    breed: catBreed,
                    origin: catOrigin,
                    description: catDescription,
                },
            ];

            // Sauvegarder les favoris dans localStorage
            localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
        }
    }

    // Récupérer les favoris depuis localStorage lors du montage
    onMount(() => {
        const storedFavorites = JSON.parse(
            localStorage.getItem("favoriteCats") || "[]",
        );
        favoriteCats = storedFavorites;
        getCatData(); // Récupérer un chat aléatoire au début
    });
</script>

<div class="container">
    <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        Générateur de chats 🐱
    </h2>

    <div class="cat-card">
        {#if catImage}
            <img src={catImage} alt="Chat mignon" />
            <p><strong>Race :</strong> {catBreed}</p>
            {#if catOrigin}<p><strong>Origine :</strong> {catOrigin}</p>{/if}
            {#if catDescription}<p>
                    <strong>Description :</strong>
                    {catDescription}
                </p>{/if}

            <button class="btn-refresh" on:click={getCatData}
                >🔄 Un autre chat</button
            >
            <button class="btn-fav" on:click={addToFavorites}
                >❤️ Ajouter aux favoris</button
            >
        {/if}
    </div>

    <div class="favorites">
        {#if favoriteCats.length > 0}
            <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                Mes chats favoris :
            </h2>
            <div class="favorites-list">
                {#each favoriteCats as cat (cat.image)}
                    <div class="fav-cat-card">
                        <img src={cat.image} alt="Chat favori" />
                        <p><strong>Race :</strong> {cat.breed}</p>
                        {#if cat.origin}<p>
                                <strong>Origine :</strong>
                                {cat.origin}
                            </p>{/if}
                        {#if cat.description}<p>
                                <strong>Description :</strong>
                                {cat.description}
                            </p>{/if}
                    </div>
                {/each}
            </div>
        {:else}
            <p>Aucun chat ajouté aux favoris encore !</p>
        {/if}
    </div>
</div>

<style>
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Container */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        color: white; /* Texte en blanc */
    }

    /* Carte du chat */
    .cat-card {
        background: linear-gradient(135deg, #8e44ad, #9b59b6); /* Violet */
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        margin: 20px;
    }

    img {
        max-width: 100%;
        border-radius: 10px;
        animation: fadeIn 1s ease-out;
    }

    /* Boutons */
    button {
        margin: 10px;
        padding: 12px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.3s ease;
    }

    .btn-refresh {
        background-color: #3498db;
        color: white;
        box-shadow: 0px 4px 8px rgba(52, 152, 219, 0.3);
    }

    .btn-fav {
        background-color: #e74c3c;
        color: white;
        box-shadow: 0px 4px 8px rgba(231, 76, 60, 0.3);
    }

    button:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    button:active {
        transform: scale(0.98);
    }

    /* Favoris */
    .favorites {
        margin-top: 40px;
    }

    .fav-cat-card {
        background: #f9f9f9;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        margin: 10px;
        color: #333; /* Texte plus foncé pour les favoris */
    }

    .fav-cat-card img {
        border-radius: 10px;
        max-width: 100%;
    }
</style>
