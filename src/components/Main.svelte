<script>
    import Step from "./Step.svelte";

    import { onMount } from "svelte";

    let favoriteCount = 0;
    onMount(() => {
        const storedFavorites = JSON.parse(
            localStorage.getItem("favoriteCats") || "[]",
        );
        favoriteCount = storedFavorites.length;
    });

    let steps = [
        {
            name: "Lorem Ipsum",
            icon: "fa-solid fa-cat",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat dolor vitae velit interdum pulvinar vitae in odio. Praesent sit amet dui in nunc dictum mattis.",
        },
        {
            name: "Mes Chats Favoris",
            icon: "fa-solid fa-cat",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat dolor vitae velit interdum pulvinar vitae in odio. Praesent sit amet dui in nunc dictum mattis.",
        },
        {
            name: "Lorem Ispum",
            icon: "fa-solid fa-cat",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat dolor vitae velit interdum pulvinar vitae in odio. Praesent sit amet dui in nunc dictum mattis.",
        },
    ];
    let benefits = [
        {
            metric: "10x",
            name: "Mauvais en orthographe de miaulement 📝🐈",
            description:
                " Il écrit 'Miaou' avec trois 'u' au lieu de deux… Une faute impardonnable pour certaines conquêtes exigeantes en grammaire féline.",
        },
        {
            name: "Offre des cadeaux… discutables 🎁🐭",
            description:
                "Il veut impressionner, mais ses choix sont parfois douteux : une plume trempée dans l’eau, une souris déjà mâchouillée ou pire… une croquette déjà léchée.",
        },
        {
            name: "Miauleur professionnel 🎤🎶",
            description:
                "Son CV indique 'expert en communication', et il sait parfaitement doser son miaulement pour se faire entendre.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Salut ! Aides-moi à rencontrer <span
                    class="poppins text-violet-400">d'autres chats</span
                >
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Rends toi sur <span class="text-violet-400">
                    "Trouver mon chat"
                </span>pour sélectionner les chats qui te plaisent !
            </p>
            <p class="text-base sm:text-lg md:text-xl">
                Retrouves le nombre de tes <span class="text-violet-400"
                    >chats favoris</span
                > plus bas !
            </p>
            <a
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
                href="/chats"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">Trouver mon chat 🧡 &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                class="object-cover z-[2] max-h-[70vh]"
                src="images/chat-roux-surpris.png"
                alt="Chat Roux"
            />
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong
                        class="text-violet-400"
                        >Donec consequat dolor vitae velit interdum pulvinar</strong
                    > vitae in odio. Praesent sit amet dui in nunc dictum mattis.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Nombre de chats en favoris : <br /><span
                        class="font-semibold text-3xl text-violet-400"
                        >{favoriteCount}</span
                    >
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong
                        class="text-violet-400"
                        >Donec consequat dolor vitae velit interdum pulvinar</strong
                    > vitae in odio. Praesent sit amet dui in nunc dictum mattis.
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Mes atouts</h6>
        </div>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>
