<script>
    export let y;
    export let tabs = [{ name: "Me Connecter", link: "/profil" }];
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <a href="/" class="hover:text-violet-400 duration-200"
            ><b class="font-bold poppins">Projet</b>Svelte</a
        >
    </h1>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
        {/each}

        <a
            href="/chats"
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <h4 class="relative z-9">Trouver mon chat ! 🧡</h4>
        </a>
    </div>
</header>
